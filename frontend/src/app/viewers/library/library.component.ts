import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {GameCard} from "../../components/game-card/game-card";
import {GameService} from '../../services/game/game.service';
import {Game} from '../../interfaces/IGame';

@Component({
	selector: 'app-library',
	imports: [
        GameCard
	],
	templateUrl: './library.component.html',
	styleUrl: './library.component.scss',
})
export class Library {

	public gameService = inject(GameService);

	@Input() selectedGame!: Game | null;
	@Input() viewingGameDetail = false;

}
