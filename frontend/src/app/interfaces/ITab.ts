import {Game} from './IGame';
import {SafeResourceUrl} from '@angular/platform-browser';

export interface Tab {
	id: string;
	game: Game;
	url: string;
	safeUrl?: SafeResourceUrl;
}
