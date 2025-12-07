import {Component, inject, signal} from '@angular/core';
import {DOCUMENT, NgClass} from '@angular/common';
import {StateService} from '../../services/state/state.service';
import {RouterLink} from '@angular/router';

@Component({
	selector: 'app-top-bar',
	imports: [
		RouterLink,
		NgClass
	],
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.scss',
})
export class TabBar {

	state = inject(StateService);

	private document = inject(DOCUMENT) as Document;

	isFullscreen = signal(false);

	minimizeApp(): void {
		console.log('Application minimized to tray');
	}

	toggleMaximizeApp(): void {
		if (!this.document.fullscreenElement) {
			this.document.documentElement.requestFullscreen().then(() => {
				this.isFullscreen.set(true);
			});
			return
		}

		if (this.document.exitFullscreen) {
			this.document.exitFullscreen().then(() => {
				this.isFullscreen.set(false);
			});
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
