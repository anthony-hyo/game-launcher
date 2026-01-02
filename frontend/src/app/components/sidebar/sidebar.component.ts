import { Component, inject } from '@angular/core';
import { LibraryService } from '../../services/library/library.service';
import { NgClass } from '@angular/common';
import { SettingsService } from '../../services/setting/setting.service';
import { SidebarButton } from '../sidebar-button/sidebar-button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../environments/environment';
import { StateService } from '../../services/state/state.service';
import { LibraryGame } from '../../models/library-game.model';

@Component({
	selector: 'app-sidebar',
	imports: [NgClass, SidebarButton, RouterLink, RouterLinkActive],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss'
})
export class Sidebar {
	
	protected readonly environment = environment;

	protected readonly stateService = inject(StateService);
	protected readonly gameService = inject(LibraryService);
	protected readonly settingsService = inject(SettingsService);

	protected readonly StateService = StateService;

	protected onGameSelect(game: LibraryGame): void {
		this.stateService.currentGame.set(game);
	}
	
}
