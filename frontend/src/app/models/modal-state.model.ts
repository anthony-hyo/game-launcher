import {ModalType} from "../constants/modal.const";
import {ComponentRef, Type} from "@angular/core";
import {ModalChild} from "../components/modal/modal-child.base";

export interface ModalState {
	type: ModalType;

	reference: ComponentRef<ModalChild> | undefined;

	component: Type<ModalChild>;
}