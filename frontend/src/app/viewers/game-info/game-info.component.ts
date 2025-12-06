import {Component, inject} from '@angular/core';
import {GameService} from '../../services/game/game.service';
import {StateService} from '../../services/state/state.service';
import {SettingsService} from '../../services/setting/setting.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Game} from '../../interfaces/IGame';

@Component({
	selector: 'app-game-info',
	imports: [
		RouterLink
	],
	templateUrl: './game-info.component.html',
	styleUrl: './game-info.component.scss',
})
export class GameInfo {

	public gameService = inject(GameService);
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
