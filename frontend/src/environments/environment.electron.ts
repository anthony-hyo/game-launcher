import {Environment} from './models/environment.model';

export const environment: Environment = {
	name: 'Electron Launcher',

	apiUrl: 'https://api-launcher.anthhyo.dev',

	backgroundImageUrl: 'https://picsum.photos/seed/cyberpunk/1920/1080',
	loadingImageUrl: 'https://picsum.photos/seed/launcher-art/512/288',

	showDownload: false,
	showHome: false,

	useHash: true,
	useWebview: true
};
