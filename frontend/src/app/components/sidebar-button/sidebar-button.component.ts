import {Component, input} from '@angular/core';
import {ViewType} from '../../helper/helper.viewer';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
	selector: 'app-sidebar-button',
	imports: [
		RouterLink,
		RouterLinkActive
	],
	templateUrl: './sidebar-button.component.html',
	styleUrl: './sidebar-button.component.scss',
})
export class SidebarButton {

	description = input.required<ViewType>();
	path = input.required<ViewType>();
	icon = input.required<ViewType>();

}
