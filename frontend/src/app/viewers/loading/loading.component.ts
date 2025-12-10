import {Component, inject} from '@angular/core';
import {WindowControl} from '../../components/window-control/window-control.component';
import {StateService} from '../../services/state/state.service';
import {environment} from '../../../environments/environment';

@Component({
	selector: 'app-loading',
	imports: [
		WindowControl
	],
	templateUrl: './loading.component.html',
	styleUrl: './loading.component.scss',
})
export class Loading {

	protected readonly stateService = inject(StateService);
	protected readonly environment = environment;

}
