import {Component, inject, input} from '@angular/core';
import {StateService} from '../../services/state/state.service';
import {environment} from '../../../environments/environment';


@Component({
	selector: 'app-window-control',
	imports: [],
	templateUrl: './window-control.component.html',
	styleUrl: './window-control.component.scss',
})
export class WindowControl {

	protected readonly environment = environment;

	protected readonly state = inject(StateService);

	public readonly hasMinimize = input<boolean>(true);
	public readonly hasMaximize = input<boolean>(true);
	public readonly hasClose = input<boolean>(true);

	protected minimize(): void {
		window.electron.window_minimize()
	}

	protected toggleMaximize(): void {
		window.electron.window_maximize()
	}

	protected close(): void {
		window.electron.window_close();
	}

}
