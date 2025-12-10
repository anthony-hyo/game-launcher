import {Component, inject, input, signal} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {StateService} from '../../services/state/state.service';
import {environment} from '../../../environments/environment';

@Component({
	selector: 'app-window-control',
	imports: [],
	templateUrl: './window-control.component.html',
	styleUrl: './window-control.component.scss',
})
export class WindowControll {

	protected readonly environment = environment;

	private readonly document = inject(DOCUMENT);

	protected readonly state = inject(StateService);
	protected readonly isFullscreen = signal(false);

	public readonly hasMinimize = input<boolean>(true);
	public readonly hasMaximize = input<boolean>(true);
	public readonly hasClose = input<boolean>(true);

	protected minimize(): void {
		console.log('Application minimized to tray');
	}

	protected toggleMaximize(): void {
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

	protected close(): void {
		window.close();
	}

}
