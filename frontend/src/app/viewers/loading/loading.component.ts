import {Component, inject} from '@angular/core';
import {WindowControll} from '../../components/window-control/window-control.component';
import {StateService} from '../../services/state/state.service';

@Component({
	selector: 'app-loading',
	imports: [
		WindowControll
	],
	templateUrl: './loading.component.html',
	styleUrl: './loading.component.scss',
})
export class Loading {

	protected readonly stateService = inject(StateService);

}
