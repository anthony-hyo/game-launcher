import {Component, computed, EventEmitter, inject, Input, Output, Signal} from '@angular/core';
import {GameService} from '../../services/game/game.service';
import {Game} from '../../interfaces/IGame';
import {ViewType} from '../../helper/helper.viewer';

@Component({
	selector: 'app-sidebar',
	imports: [],
	templateUrl: './sidebar.html',
	styleUrl: './sidebar.scss',
})
export class Sidebar {

	public gameService = inject(GameService);

	@Input() activeView!: Signal<ViewType>;
	@Input() selectedGameTitle: Signal<string | null> = computed(() => null);

	@Output() gameSelect = new EventEmitter<Game>();
	@Output() viewClick = new EventEmitter<ViewType>();
	@Output() libraryClick = new EventEmitter<void>();
	@Output() settingsClick = new EventEmitter<void>();
}
