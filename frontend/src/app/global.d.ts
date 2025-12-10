// src/global.d.ts
import {ViewType} from './helper/helper.viewer';
import {Tab} from './models/tab.model';

export {};

declare global {
	interface Window {
		loading: {
			progress: (value: number) => void,
			text: (value: string) => void,
		},
		tab: {
			open: (viewId: ViewType) => void,
			close: (event: MouseEvent, tab: Tab) => void,
			openURL: (url: string) => void,
		},
		electron: {
			update_rich_presence: (data: any) => void,

			window_minimize: () => void,
			window_maximize: () => void,
			window_close: () => void,
		},
	}
}
