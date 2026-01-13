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

	protected readonly stateService = inject(StateService);

	public readonly hasMinimize = input<boolean>(true);
	public readonly hasMaximize = input<boolean>(true);
	public readonly hasClose = input<boolean>(true);

	protected onClickMinimize(): void {
		window.electron.window_minimize()
	}

	protected onClickToggleMaximize(): void {
		window.electron.window_maximize()
	}

	protected onClickClose(): void {
		window.electron.window_close();
	}

}
