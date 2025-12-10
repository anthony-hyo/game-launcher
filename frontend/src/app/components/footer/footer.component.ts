import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
	selector: 'app-footer',
	imports: [],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss',
})
export class Footer {

	protected readonly environment = environment;

}
