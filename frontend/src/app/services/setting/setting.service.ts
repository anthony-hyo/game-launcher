import {effect, Injectable, signal} from '@angular/core';
import {ThemeType} from '../../helper/helper.viewer';
import {HelperStorage} from '../../helper/helper.storage';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class SettingsService {

	public readonly theme = signal<ThemeType>('dark');
	public readonly isDiscordRpcEnabled = signal<boolean>(true);

	constructor() {
		this.theme.set(<'light' | 'dark'>localStorage.getItem(HelperStorage.SETTING_THEME) ?? 'dark');
		
		const settingDiscordRPC = localStorage.getItem(HelperStorage.SETTING_DISCORD_RPC);
		this.isDiscordRpcEnabled.set(settingDiscordRPC === null || settingDiscordRPC === 'true');

		if (environment.useWebview && window.electron) {
			effect(() => {
				if (this.isDiscordRpcEnabled()) {
					window.electron.discord_rpc_enable();
				} else {
					window.electron.discord_rpc_disable();
				}
			});
		}
	}

	public toggleTheme(): void {
		this.theme.update(current => current === 'dark' ? 'light' : 'dark');

		localStorage.setItem(HelperStorage.SETTING_THEME, this.theme());
	}

	public toggleDiscordRpc(): void {
		this.isDiscordRpcEnabled.update(enabled => !enabled);

		localStorage.setItem(HelperStorage.SETTING_DISCORD_RPC, this.isDiscordRpcEnabled() ? 'true' : 'false');
	}

}
