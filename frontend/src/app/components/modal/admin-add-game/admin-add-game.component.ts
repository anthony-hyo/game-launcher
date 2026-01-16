import {Component} from '@angular/core';
import {Modal} from '../modal.component';
import {ModalChild} from "../modal-child.base";
import {ModalType} from "../../../constants/modal.const";

@Component({
	selector: 'app-admin-add-game',
	imports: [
		Modal
	],
	templateUrl: './admin-add-game.component.html',
	styleUrl: './admin-add-game.component.scss'
})
export class AdminAddGame extends ModalChild {

	protected readonly ModalType = ModalType;
	
}
