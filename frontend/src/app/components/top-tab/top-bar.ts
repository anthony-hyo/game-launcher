import {Component, computed, inject, input, output, signal} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {GameService} from '../../services/game/game.service';
import {StateService} from '../../services/state/state.service';

@Component({
	selector: 'app-tab-bar',
	imports: [],
	templateUrl: './top-bar.html',
	styleUrl: './top-bar.scss',
})
export class TabBar {

	gameService = inject(GameService);
	stateService = inject(StateService);

	private document = inject(DOCUMENT) as Document;

	activeView = input.required<string>();

	viewSelect = output<string>();
	tabClose = output<string>();
	launcherSelect = output<void>();

	isLauncherViewActive = computed(() => this.activeView() === 'launcher');
	isFullscreen = signal(false);

	closeTab(event: MouseEvent, tabId: string): void {
		event.stopPropagation();
		this.tabClose.emit(tabId);
	}

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

	protected readonly StateService = StateService;
}
