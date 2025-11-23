import {Injectable, signal} from '@angular/core';
import {Game} from "../../util";

@Injectable({providedIn: 'root'})
export class GameService {
	private readonly STORAGE_KEY = 'gameLauncherPlayCounts';

	private games = signal<Game[]>([
		{
			title: 'Unknown Game',
			description: 'No description available.',
			imageUrl: 'https://placehold.co/1920x1080?text=Game+Background&font=roboto',
			coverUrl: 'https://placehold.co/300x450?text=Game+Cover&font=roboto',
			iconUrl: 'https://placehold.co/100x100?text=Icon&font=roboto',
			url: 'https://google.com',
			genre: 'Unknown',
			news: [
				{
					title: 'No news available',
					date: '',
					summary: 'There are no updates for this game.',
					imageUrl: 'https://placehold.co/400x200?text=No+News'
				}
			]
		},
		{
			title: 'Unknown Game2',
			description: 'No description available.',
			imageUrl: 'https://placehold.co/1920x1080?text=Game+Background&font=roboto',
			coverUrl: 'https://placehold.co/300x450?text=Game+Cover&font=roboto',
			iconUrl: 'https://placehold.co/100x100?text=Icon&font=roboto',
			url: 'https://google.com',
			genre: 'Unknown',
			news: [
				{
					title: 'No news available',
					date: '',
					summary: 'There are no updates for this game.',
					imageUrl: 'https://placehold.co/400x200?text=No+News'
				}
			]
		}
	]);

	constructor() {
		this.loadPlayCounts();
	}

	getGames() {
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
