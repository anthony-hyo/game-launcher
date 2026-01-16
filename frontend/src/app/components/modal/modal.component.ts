import {Component, inject, Input, input, output, signal, viewChild} from '@angular/core';
import {ModalType} from '../../constants/modal.const';
import {NgClass} from "@angular/common";
import {ModalService} from "../../services/modal/modal.service";

@Component({
	selector: 'app-modal',
	imports: [
		NgClass
	],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss'
})
export class Modal {

	protected readonly ModalType = ModalType;
	protected readonly modalService = inject(ModalService);

	public readonly title = input.required<string>();
	
	public readonly modalType = input.required<ModalType>();
	
	public readonly animationClass = signal<string>('animate-fade-in-up');

	public onClose(): void {
		this.modalService.close(this.modalType());
	}

}