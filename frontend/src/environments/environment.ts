import {Environment} from './models/environment.model';

export const environment: Environment = {
	name: 'Web Launcher',

	apiUrl: 'https://launcher.anthhyo.dev',

	backgroundImageUrl: 'https://picsum.photos/seed/cyberpunk/1920/1080',
	loadingImageUrl: 'https://picsum.photos/seed/launcher-art/512/288',

	showDownload: true,
	showHome: true,

	useHash: false,
	useWebview: false

};
