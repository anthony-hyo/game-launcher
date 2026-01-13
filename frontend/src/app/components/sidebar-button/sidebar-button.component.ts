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

	protected readonly stateService = inject(StateService);

	public readonly description = input.required<string>();
	public readonly path = input<string>();
	
	public readonly icon = input.required<string>();
	public readonly iconAnimation = input<string>('');

}
