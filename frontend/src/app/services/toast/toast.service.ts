import {ComponentRef, Injectable, ViewContainerRef} from '@angular/core';
import {Toast} from '../../components/toast/toast.component';
import {random} from '../../helper/helper.random';

@Injectable({
	providedIn: 'root'
})
export class ToastService {

	private readonly active = new Map<string, ComponentRef<Toast>>();

	public container: ViewContainerRef | undefined = undefined;

	public show(type: 'info' | 'success' | 'warning' | 'error', message: string, duration = 3000) {
		const container = this.container;

		if (!container) {
			console.error(`Toast container is not initialized`);
			console.error(type, message);
			return;
		}

		const element = container.createComponent(Toast);

		if (!element) {
			console.error(`Toast element is not initialized`);
			console.error(type, message);
			return;
		}

		element.setInput('type', type);
		element.setInput('message', message);

		const id = random();

		this.active.set(id, element);

		setTimeout(() => {
			element.setInput('animationClass', 'animate-fade-out-down');

			setTimeout(() => element.destroy(), 1000);
		}, duration - 1000);
	}

}
