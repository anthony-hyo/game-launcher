import {Component, computed, EventEmitter, Input, Output, Signal} from '@angular/core';
import {Game, ViewType} from "../../util";

@Component({
	selector: 'app-sidebar',
	imports: [],
	templateUrl: './sidebar.html',
	styleUrl: './sidebar.scss',
})
export class Sidebar {
	@Input() games!: Signal<Game[]>;
	@Input() activeView!: Signal<ViewType>;
	@Input() selectedGameTitle: Signal<string | null> = computed(() => null);

	@Output() gameSelect = new EventEmitter<Game>();
	@Output() viewClick = new EventEmitter<ViewType>();
	@Output() libraryClick = new EventEmitter<void>();
	@Output() settingsClick = new EventEmitter<void>();
}
