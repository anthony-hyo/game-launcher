import {Component} from '@angular/core';
import {Modal} from '../modal.component';
import {ModalChild} from "../modal-child.base";
import {ModalType} from '../../../constants/modal.const';

@Component({
	selector: 'app-confirmation',
	imports: [
		Modal
	],
	templateUrl: './confirmation.component.html',
	styleUrl: './confirmation.component.scss',
})
export class Confirmation extends ModalChild {

	protected readonly ModalType = ModalType;

	protected onCancel(): void {

	}

	protected onConfirm(): void {

	}

}
