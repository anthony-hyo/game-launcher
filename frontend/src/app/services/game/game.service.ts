import {inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from '../../models/game.model';
import {HelperStorage} from '../../helper/helper.storage';

@Injectable({providedIn: 'root'})
export class GameService {

	private http = inject(HttpClient);

	private games: WritableSignal<Game[]> = signal<Game[]>([]);

	constructor() {
		this.http.get<Game[]>(`http://localhost:8080/api/launcher/games`)
			.subscribe(games => {
				this.games.set(games);

				this.loadPlayCounts();
			})
	}

	public get getGames(): Signal<Game[]> {
		return this.games.asReadonly();
	}

	public incrementPlayCount(gameTitle: string): void {
		let updatedGame: Game | undefined;

		this.games.update(currentGames =>
			currentGames.map(g => {
				if (g.title === gameTitle) {
					updatedGame = {...g, playCount: (g.playCount || 0) + 1};
					return updatedGame;
				}

				return g;
			})
		);

		this.savePlayCounts();
	}

	public getGameById(id: number): Game | undefined {
		return this.games().find(g => g.id === id);
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
