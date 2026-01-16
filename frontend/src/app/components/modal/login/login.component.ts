import {Component} from '@angular/core';
import {ModalType} from '../../../constants/modal.const';
import {Modal} from '../modal.component';
import {ModalChild} from "../modal-child.base";

@Component({
	selector: 'app-login',
	imports: [
		Modal
	],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class Login extends ModalChild {

	protected readonly ModalType = ModalType;

}
