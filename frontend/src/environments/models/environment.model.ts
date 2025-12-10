export interface Environment {
	name: string;

	apiUrl: string;
	backgroundImageUrl: string;
	loadingImageUrl: string;

	showDownload: boolean;
	showHome: boolean;

	useHash: boolean;
	useWebview: boolean
}
