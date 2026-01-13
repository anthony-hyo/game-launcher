import {Component, inject} from '@angular/core';
import {WindowControl} from '../../components/window-control/window-control.component';
import {environment} from '../../../environments/environment';
import {LoadingService} from '../../services/loading/loading.service';

@Component({
	selector: 'app-loading',
	imports: [
		WindowControl
	],
	templateUrl: './loading.component.html',
	styleUrl: './loading.component.scss',
})
export class Loading {

	protected readonly environment = environment;

	protected readonly loadingService = inject(LoadingService);

}
