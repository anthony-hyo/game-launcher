export interface GameNews {
	title: string;
	date: string;
	summary: string;
	imageUrl: string;
}

export interface Game {
	title: string;
	description: string;
	imageUrl: string;
	coverUrl: string;
	iconUrl: string;
	url: string;
	genre: string;
	news: GameNews[];
	playCount?: number;
}
