import {Component, EventEmitter, Output} from '@angular/core';
import {environment} from '../../../environments/environment';
import {RouterLink} from '@angular/router';
import {Footer} from '../../components/footer/footer.component';

@Component({
	selector: 'app-home',
	imports: [
		RouterLink,
		Footer
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class Home {

	protected readonly environment = environment;

}
