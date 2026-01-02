import {SafeResourceUrl} from '@angular/platform-browser';

export interface Tab {
	tabId: string;

	title: string;

	url: URL;
	rawUrl: string;
	safeUrl: SafeResourceUrl;

	isWhitelistedDomain: boolean;
}
