import {SafeResourceUrl} from '@angular/platform-browser';
import {LibraryGame} from './library-game.model';

export interface Tab {
	tabId: string;
	
	game?: LibraryGame;

	title: string;

	url: URL;
	rawUrl: string;
	safeUrl: SafeResourceUrl;

	isWhitelistedDomain: boolean;
}
