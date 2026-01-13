import {Component, inject, input} from '@angular/core';
import {LibraryGame} from '../../models/library-game.model';
import {StateService} from '../../services/state/state.service';
import {RouterLink} from '@angular/router';

@Component({
	selector: 'app-library-card',
	imports: [
		RouterLink
	],
	templateUrl: './library-card.component.html',
	styleUrl: './library-card.component.scss',
})
export class LibraryCard {
	
	protected readonly stateService = inject(StateService);

	public readonly game = input.required<LibraryGame>();

}
