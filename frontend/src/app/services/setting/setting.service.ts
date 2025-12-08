import {Injectable, signal} from '@angular/core';
import {ThemeType} from '../../helper/helper.viewer';
import {HelperStorage} from '../../helper/helper.storage';

@Injectable({providedIn: 'root'})
export class SettingsService {

	public readonly theme = signal<ThemeType>('dark');
	public readonly isSettingsVisible = signal<boolean>(false);
	public readonly isDiscordRpcEnabled = signal<boolean>(true);

	constructor() {
		this.theme.set(<"light" | "dark">localStorage.getItem(HelperStorage.THEME) ?? 'dark')
	}

	public toggleTheme(): void {
		this.theme.update(current => current === 'dark' ? 'light' : 'dark');

		localStorage.setItem(HelperStorage.THEME, this.theme())
	}

	public toggleSettings(visible: boolean): void {
		this.isSettingsVisible.set(visible);
	}

	public toggleDiscordRpc(): void {
		this.isDiscordRpcEnabled.update(enabled => !enabled);
	}

}
