import {SafeResourceUrl} from '@angular/platform-browser';

export interface Tab {
	tabId: string;

	title: string;

	rawUrl: string;
	safeUrl: SafeResourceUrl;

	isWhitelistedDomain: boolean;
}
