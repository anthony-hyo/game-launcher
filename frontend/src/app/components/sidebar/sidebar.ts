import {Component, inject} from '@angular/core';
import {GameService} from '../../services/game/game.service';
import {NgClass} from '@angular/common';
import {StateService} from '../../services/state/state.service';
import {SettingsService} from '../../services/setting/setting.service';
import {SidebarButton} from '../sidebar-button/sidebar-button';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
	selector: 'app-sidebar',
	imports: [
		NgClass,
		SidebarButton,
		RouterLink,
		RouterLinkActive
	],
	templateUrl: './sidebar.html',
	styleUrl: './sidebar.scss',
})
export class Sidebar {

	public gameService = inject(GameService);
	public stateService = inject(StateService);
	public settingsService = inject(SettingsService);

}
