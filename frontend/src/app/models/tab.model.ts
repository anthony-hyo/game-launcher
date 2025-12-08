import {Game} from './game.model';
import {SafeResourceUrl} from '@angular/platform-browser';

export interface Tab {
	tabId: string;
	game: Game;
	url: string;
	safeUrl?: SafeResourceUrl;
}
