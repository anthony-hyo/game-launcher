import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {Game} from "../../util";
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GameService {

	isLoading = signal<boolean>(true);

	private readonly STORAGE_KEY = 'gameLauncherPlayCounts';

	private http = inject(HttpClient);

	private games: WritableSignal<Game[]> = signal<Game[]>([]);

	constructor() {
		this.http.get<Game[]>(`http://localhost:8080/api/launcher/games`)
			.subscribe(games => {
				this.games.set(games);

				this.loadPlayCounts();

				this.isLoading.set(false);
			})
	}

	public getGames() {
		return this.games.asReadonly();
	}

	incrementPlayCount(gameTitle: string): void {
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

	getGameByTitle(title: string): Game | undefined {
		return this.games().find(g => g.title === title);
	}

	private loadPlayCounts(): void {
		const savedCountsRaw = localStorage.getItem(this.STORAGE_KEY);
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

		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(allCounts));
	}
}
