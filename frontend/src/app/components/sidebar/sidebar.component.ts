import {Component, inject} from '@angular/core';
import {GameService} from '../../services/game/game.service';
import {NgClass} from '@angular/common';
import {SettingsService} from '../../services/setting/setting.service';
import {SidebarButton} from '../sidebar-button/sidebar-button.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
	selector: 'app-sidebar',
	imports: [
		NgClass,
		SidebarButton,
		RouterLink,
		RouterLinkActive
	],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class Sidebar {

	public gameService = inject(GameService);
	public settingsService = inject(SettingsService);

}
