import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {GameCard} from "../../components/game-card/game-card";
import {GameService} from '../../services/game/game.service';
import {Game} from '../../interfaces/IGame';

@Component({
	selector: 'app-launcher',
	imports: [
        GameCard
	],
	templateUrl: './launcher.html',
	styleUrl: './launcher.scss',
})
export class Launcher {

	public gameService = inject(GameService);

	@Input() selectedGame!: Game | null;
	@Input() viewingGameDetail = false;

	@Output() playClick = new EventEmitter<Game>();
	@Output() infoClick = new EventEmitter<Game>();
	@Output() backClick = new EventEmitter<void>();

}
