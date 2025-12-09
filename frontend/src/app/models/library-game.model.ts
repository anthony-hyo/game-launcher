import {LibraryGameResponse} from './library-game-response.model';

export interface LibraryGameNews {
	title: string;
	date: string;
	summary: string;
	imageUrl: string;
}

export interface LibraryGame extends LibraryGameResponse {
	news: LibraryGameNews[];
	playCount: number;
}
