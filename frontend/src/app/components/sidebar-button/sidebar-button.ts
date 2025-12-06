import {Component, inject, input} from '@angular/core';
import {NgClass} from '@angular/common'
import {StateService} from '../../services/state/state.service';
import {ViewType} from '../../helper/helper.viewer';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
	selector: 'app-sidebar-button',
	imports: [
		NgClass,
		RouterLink,
		RouterLinkActive
	],
	templateUrl: './sidebar-button.html',
	styleUrl: './sidebar-button.scss',
})
export class SidebarButton {

	public stateService = inject(StateService);

	description = input.required<ViewType>();
	path = input.required<ViewType>();
	icon = input.required<ViewType>();

}
