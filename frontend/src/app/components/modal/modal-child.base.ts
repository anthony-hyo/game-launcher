import {Directive, viewChild} from '@angular/core';
import {Modal} from "./modal.component";

@Directive()
export abstract class ModalChild {

	public readonly modal = viewChild.required(Modal);

}