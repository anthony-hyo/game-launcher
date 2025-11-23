import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-loading',
	imports: [],
	templateUrl: './loading.html',
	styleUrl: './loading.scss',
})
export class Loading {
  @Input() loadingText = 'Initializing...';
  @Input() loadingProgress = 0;
}
