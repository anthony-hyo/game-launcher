import {Injectable, signal} from '@angular/core';
import {ThemeType} from "../../util";

@Injectable({providedIn: 'root'})
export class SettingsService {
	isSettingsVisible = signal<boolean>(false);
	theme = signal<ThemeType>('dark');
	isDiscordRpcEnabled = signal<boolean>(true);

	toggleSettings(visible: boolean): void {
		this.isSettingsVisible.set(visible);
	}

	toggleTheme(): void {
		this.theme.update(current => current === 'dark' ? 'light' : 'dark');
	}

	toggleDiscordRpc(): void {
		this.isDiscordRpcEnabled.update(enabled => !enabled);
	}
}
