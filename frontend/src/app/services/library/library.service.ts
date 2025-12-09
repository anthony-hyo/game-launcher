import {inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LibraryGame} from '../../models/library-game.model';
import {HelperStorage} from '../../helper/helper.storage';
import {environment} from '../../../environments/environment';
import {interval, retry, startWith, switchMap} from 'rxjs';
import {LibraryGameResponse} from '../../models/library-game-response.model';

@Injectable({providedIn: 'root'})
export class LibraryService {

	private readonly http = inject(HttpClient);

	private readonly games: WritableSignal<LibraryGame[]> = signal<LibraryGame[]>([]);

	constructor() {
		interval(60000 * 30) //execute every thirty minutes
			.pipe(
				startWith(0), //execute now
				switchMap(() =>
					this.http.get<LibraryGameResponse[]>(`${environment.apiUrl}/api/library/games`)
						.pipe(
							retry({
								delay: 5000
							})
						)
				)
			)
			.subscribe(libraryGamesResponse => {
				this.games.set(libraryGamesResponse.map(libraryGameResponse => ({
						...libraryGameResponse,
						news: [],
						playCount: 0,
					})
				));

				this.loadPlayCounts();
			})
	}

	public get getGames(): Signal<LibraryGame[]> {
		return this.games.asReadonly();
	}

	public incrementPlayCount(gameTitle: string): void {
		this.games.update(currentGames =>
			currentGames.map(g => g.title === gameTitle ? {...g, playCount: (g.playCount || 0) + 1} : g)
		);

		this.savePlayCounts();
	}

	public getGameById(id: number): LibraryGame | undefined {
		return this.games().find(g => g.id === id);
	}

	public getGamesByURL(url: string): LibraryGame | undefined {
		const hostname = new URL(url).hostname;
		return this.games().find(g => g.url.includes(hostname));
	}

	private loadPlayCounts(): void {
		const savedCountsRaw = localStorage.getItem(HelperStorage.PLAY_COUNTS);
		const playCounts = savedCountsRaw ? JSON.parse(savedCountsRaw) : {};

		this.games.update(currentGames =>
			currentGames.map(game => ({
				...game,
				playCount: playCounts[game.title] || 0,
			}))
		);
	}

	private savePlayCounts(): void {
		const allCounts = this.games().reduce((acc, g) => {
			acc[g.title] = g.playCount || 0;
			return acc;
		}, {} as { [key: string]: number });

		localStorage.setItem(HelperStorage.PLAY_COUNTS, JSON.stringify(allCounts));
	}

}
