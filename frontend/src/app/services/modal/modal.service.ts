import {inject, Injectable, ViewContainerRef} from '@angular/core';
import {ModalType} from "../../constants/modal.const";
import {ToastService} from "../toast/toast.service";
import {ModalState} from "../../models/modal-state.model";
import {Login} from "../../components/modal/login/login.component";
import {Setting} from "../../components/modal/setting/setting.component";
import {AdminGame} from "../../components/modal/admin-game/admin-game.component";
import {Confirmation} from "../../components/modal/confirmation/confirmation.component";
import {ModalChild} from "../../components/modal/modal-child.base";

@Injectable({
	providedIn: 'root'
})
export class ModalService {

	//this code is a mess and probably need rework to make it more "maintainable"

	private readonly toastService = inject(ToastService);

	private readonly modals: ModalState[] = [
		{
			type: ModalType.LOGIN,
			reference: undefined,
			component: Login
		},
		{
			type: ModalType.SETTINGS,
			reference: undefined,
			component: Setting
		},
		{
			type: ModalType.ADMIN_GAME,
			reference: undefined,
			component: AdminGame
		},
		{
			type: ModalType.CONFIRMATION,
			reference: undefined,
			component: Confirmation
		}
	]

	public container: ViewContainerRef | undefined = undefined;

	public show(type: ModalType, data: unknown | undefined = undefined): void {
		const modal = this.modals.find(modal => modal.type === type);

		if (!modal) {
			this.toastService.show('error', `Modal not found.`);
			return;
		}

		if (modal.reference) {
			this.toastService.show('warning', `Modal already initialized`);
			return;
		}

		const container = this.container;

		if (!container) {
			this.toastService.show('error', `Modal container is not initialized`);
			return;
		}

		const element = container.createComponent(modal.component);

		if (!element) {
			this.toastService.show('error', `Modal element is not initialized`);
			return;
		}

		if (data) {
			element.setInput('data', data);
		}

		modal.reference = element;
	}

	public close(type: ModalType): void {
		const modal = this.modals.find(modal => modal.type === type);

		if (!modal || !modal.reference) {
			return;
		}

		const instance = modal.reference.instance as ModalChild;

		const modalUI = instance.modal();

		if (!modalUI) {
			modal.reference.destroy();
			modal.reference = undefined;
			return;
		}

		instance.modal()?.animationClass?.set('animate-fade-out-down');

		setTimeout(() => {
			modal.reference?.destroy();
			modal.reference = undefined;
		}, 200);
	}

}
