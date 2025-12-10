import {Component, Input} from '@angular/core';
import {WindowControll} from '../../components/window-control/window-control.component';

@Component({
	selector: 'app-loading',
	imports: [
		WindowControll
	],
	templateUrl: './loading.component.html',
	styleUrl: './loading.component.scss',
})
export class Loading {

	@Input() loadingText = 'Initializing...';
	@Input() loadingProgress = 0;

}
