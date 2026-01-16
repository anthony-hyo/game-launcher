import {Component, computed, input, signal} from '@angular/core';
import {ModalType} from '../../constants/modal.const';
import {NgClass} from '@angular/common';

@Component({
	selector: 'app-toast',
	imports: [
		NgClass
	],
	templateUrl: './toast.component.html',
	styleUrl: './toast.component.scss'
})
export class Toast {

	protected readonly ModalType = ModalType;

	public readonly type = input.required<'info' | 'success' | 'warning' | 'error'>();
	public readonly message = input.required<string>();
	
	public readonly animationClass = input<string>('animate-fade-in-up');
	
	protected typeClass = computed(() => {
		switch (this.type()) {
			case 'info':
				return 'bg-blue-500 text-white';
			case 'success':
				return 'bg-green-500 text-white';
			case 'warning':
				return 'bg-yellow-500 text-white';
			case 'error':
				return 'bg-red-500 text-white';
		}
	})

	public isVisible = true;

	protected onClose(): void {
		this.isVisible = false;
	}

}
