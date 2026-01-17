import {Component, inject} from '@angular/core';
import {LibraryService} from '../../services/library/library.service';
import {ModalType} from '../../constants/modal.const';
import {StateService} from '../../services/state/state.service';
import {ToastService} from '../../services/toast/toast.service';
import {HttpClient} from '@angular/common/http';
import {LibraryGame} from '../../models/library-game.model';
import {environment} from '../../../environments/environment';
import {ModalService} from "../../services/modal/modal.service";

@Component({
	selector: 'app-admin',
	imports: [],
	templateUrl: './admin.component.html',
	styleUrl: './admin.component.scss'
})
export class Admin {

	protected readonly ModalType = ModalType;

	protected readonly gameService = inject(LibraryService);
	protected readonly stateService = inject(StateService);
	protected readonly modalService = inject(ModalService);
	protected readonly toastService = inject(ToastService);

	protected readonly httpClient = inject(HttpClient);

	protected onGameEdit(game: LibraryGame): void {
		this.httpClient.get(`${environment.apiUrl}/api/library/games/${game.id}`)
			.subscribe({
				next: value => {
					this.modalService.show(ModalType.ADMIN_GAME, {
						isEditing: true,
						game: value
					})
				},
				error: err => {
					this.toastService.show('error', err.error.message || 'Failed to edit game');
				}
			});
	}

	protected onGameDelete(game: LibraryGame): void {
		this.httpClient.delete(`${environment.apiUrl}/api/library/games/${game.id}`)
			.subscribe({
				next: value => {
					this.gameService.refreshGames();
				},
				error: err => {
					this.toastService.show('error', err.error.message || 'Failed to delete game');
				}
			});
	}

}
