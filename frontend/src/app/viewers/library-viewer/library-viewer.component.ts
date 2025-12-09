import {Component, inject} from '@angular/core';
import {LibraryService} from '../../services/library/library.service';
import {StateService} from '../../services/state/state.service';
import {SettingsService} from '../../services/setting/setting.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Game} from '../../models/game.model';
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

	public gameService = inject(LibraryService);
	public stateService = inject(StateService);
	public settingsService = inject(SettingsService);

	private route = inject(ActivatedRoute);

	protected game!: Game;
	private gameId!: number;

	constructor() {
		this.route.paramMap.subscribe(params => {
			this.gameId = Number(params.get('id'));

			this.game = this.gameService.getGameById(this.gameId)!;
		});
	}

}
