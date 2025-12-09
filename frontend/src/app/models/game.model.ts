export interface GameNews {
	title: string;
	date: string;
	summary: string;
	imageUrl: string;
}

export interface Game {
	
	id: number;

	title: string;
	description: string;

	genre: string;

	url: string;
	imageUrl: string;
	coverUrl: string;
	iconUrl: string;

	news: GameNews[];

	playCount: number;

}
