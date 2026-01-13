import {Component} from '@angular/core';
import {ModalType} from '../../../constants/modal.const';
import {Modal} from '../modal.component';

@Component({
	selector: 'app-login',
	imports: [
		Modal
	],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class Login {

	protected readonly ModalType = ModalType;

}
