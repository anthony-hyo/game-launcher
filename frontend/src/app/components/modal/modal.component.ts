import {Component, inject, input} from '@angular/core';
import {StateService} from '../../services/state/state.service';
import {ModalType} from '../../constants/modal.const';

@Component({
	selector: 'app-modal',
	imports: [],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss'
})
export class Modal {

	protected readonly ModalType = ModalType;

	protected readonly stateService = inject(StateService);

	public readonly title = input.required<string>();

}
