import {Component, inject} from '@angular/core';
import {LibraryService} from '../../services/library/library.service';
import {StateService} from '../../services/state/state.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {LibraryGame} from '../../models/library-game.model';
import {Footer} from '../../components/footer/footer.component';

@Component({
	selector: 'app-library-viewer',
	imports: [
		RouterLink,
		Footer
	],
	templateUrl: './library-viewer.component.html',
	styleUrl: './library-viewer.component.scss',
})
export class LibraryViewer {

	protected readonly gameService = inject(LibraryService);
	protected readonly stateService = inject(StateService);

	private readonly route = inject(ActivatedRoute);

	protected libraryGameId!: number;
	protected libraryGame!: LibraryGame;

	constructor() {
		this.route.paramMap.subscribe(params => {
			this.libraryGameId = Number(params.get('id'));

			this.libraryGame = this.gameService.getGameById(this.libraryGameId)!;
		});
	}

}
