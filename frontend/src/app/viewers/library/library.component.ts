import {Component, inject} from '@angular/core';
import {LibraryCard} from '../../components/library-card/library-card.component';
import {LibraryService} from '../../services/library/library.service';

@Component({
	selector: 'app-library',
	imports: [
		LibraryCard
	],
	templateUrl: './library.component.html',
	styleUrl: './library.component.scss',
})
export class Library {

	protected readonly gameService = inject(LibraryService);

}
