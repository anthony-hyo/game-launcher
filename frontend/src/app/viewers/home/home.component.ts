import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'app-home',
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class Home {

	@Output() downloadClick = new EventEmitter<void>();

}
