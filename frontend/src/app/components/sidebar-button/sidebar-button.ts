import {Component, inject, input} from '@angular/core';
import {NgClass} from '@angular/common'
import {StateService} from '../../services/state/state.service';
import {ViewType} from '../../helper/helper.viewer';

@Component({
	selector: 'app-sidebar-button',
	imports: [
		NgClass
	],
	templateUrl: './sidebar-button.html',
	styleUrl: './sidebar-button.scss',
})
export class SidebarButton {

	public stateService = inject(StateService);

	description = input.required<ViewType>();
	viewType = input.required<ViewType>();
	icon = input.required<ViewType>();

}
