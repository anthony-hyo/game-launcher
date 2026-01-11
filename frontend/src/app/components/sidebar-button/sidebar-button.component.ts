import {Component, inject, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {StateService} from '../../services/state/state.service';
import {NgClass} from '@angular/common';

@Component({
	selector: 'app-sidebar-button',
	imports: [
		RouterLink,
		RouterLinkActive,
		NgClass
	],
	templateUrl: './sidebar-button.component.html',
	styleUrl: './sidebar-button.component.scss',
})
export class SidebarButton {

	protected readonly state = inject(StateService);

	description = input.required<string>();
	path = input<string>();
	
	icon = input.required<string>();
	iconAnimation = input<string>('');

}
