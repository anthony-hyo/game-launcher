import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-loading',
	imports: [],
	templateUrl: './loading.component.html',
	styleUrl: './loading.component.scss',
})
export class Loading {

	@Input() loadingText = 'Initializing...';
	@Input() loadingProgress = 0;

}
