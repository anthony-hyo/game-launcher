import {SafeResourceUrl} from '@angular/platform-browser';

export interface NewsArticle {
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
	news: NewsArticle[];
	playCount?: number;
}

export interface Tab {
	id: string;
	game: Game;
	url: SafeResourceUrl;
}

export type ViewType = 'home' | 'download' | 'launcher' | string;
export type ThemeType = 'light' | 'dark';


export function random(): string {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;

	for (let i = 0; i < 30; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}
