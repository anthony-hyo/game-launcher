import {Component, inject, input} from '@angular/core';
import {Game} from '../../interfaces/IGame';
import {StateService} from '../../services/state/state.service';
import {GameService} from '../../services/game/game.service';
import {SettingsService} from '../../services/setting/setting.service';
import {RouterLink} from '@angular/router';

@Component({
	selector: 'app-game-card',
	imports: [
		RouterLink
	],
	templateUrl: './game-card.html',
	styleUrl: './game-card.scss',
})
export class GameCard {

	public gameService = inject(GameService);
	public state = inject(StateService);
	public settings = inject(SettingsService);

	public game = input.required<Game>();

}
