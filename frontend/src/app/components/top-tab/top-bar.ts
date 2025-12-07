import {Component, computed, inject, signal} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {GameService} from '../../services/game/game.service';
import {StateService} from '../../services/state/state.service';
import {SettingsService} from '../../services/setting/setting.service';
import {RouterLink} from '@angular/router';

@Component({
	selector: 'app-top-bar',
	imports: [
		RouterLink
	],
	templateUrl: './top-bar.html',
	styleUrl: './top-bar.scss',
})
export class TabBar {

	gameService = inject(GameService);
	state = inject(StateService);
	settings = inject(SettingsService);

	private document = inject(DOCUMENT) as Document;

	isLauncherViewActive = computed(() => this.state.activeView() === 'library');
	isFullscreen = signal(false);

	minimizeApp(): void {
		console.log('Application minimized to tray');
	}

	toggleMaximizeApp(): void {
		if (!this.document.fullscreenElement) {
			this.document.documentElement.requestFullscreen().then(() => {
				this.isFullscreen.set(true);
			}).catch(err => {
				console.error('Error attempting to enable fullscreen:', err);
			});
		} else {
			if (this.document.exitFullscreen) {
				this.document.exitFullscreen().then(() => {
					this.isFullscreen.set(false);
				});
			}
		}
	}

	closeApp(): void {
		console.log('Closing application...');

		setTimeout(() => {
			try {
				window.close();
			} catch (e) {
				console.warn('Cannot close window via script', e);
			}
		}, 1000);
	}

}
