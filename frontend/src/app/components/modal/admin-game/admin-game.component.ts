import {Component, ElementRef, inject, input, OnInit, viewChild} from '@angular/core';
import {Modal} from '../modal.component';
import {ModalChild} from "../modal-child.base";
import {ModalType} from "../../../constants/modal.const";
import {LibraryGame} from "../../../models/library-game.model";
import {environment} from "../../../../environments/environment";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ToastService} from "../../../services/toast/toast.service";
import {ModalService} from "../../../services/modal/modal.service";
import {LibraryService} from "../../../services/library/library.service";

type DataResponse = { isEditing: boolean, game: LibraryGame | undefined };

@Component({
	selector: 'app-admin-game',
	imports: [
		Modal,
		FormsModule
	],
	templateUrl: './admin-game.component.html',
	styleUrl: './admin-game.component.scss'
})
export class AdminGame extends ModalChild implements OnInit {

	protected readonly environment = environment;
	protected readonly ModalType = ModalType;

	protected readonly gameService = inject(LibraryService);
	protected readonly modalService = inject(ModalService)
	protected readonly toastService = inject(ToastService);

	protected readonly httpClient = inject(HttpClient);

	protected readonly btnSubmit = viewChild.required<ElementRef<HTMLButtonElement>>('btnSubmit')

	public readonly data = input<DataResponse>({
		isEditing: false,
		game: undefined
	});

	protected formData: Partial<LibraryGame> = {};

	ngOnInit() {
		if (this.data().game) {
			this.formData = {...this.data().game};
		}
	}

	protected onSubmit() {
		const btn = this.btnSubmit().nativeElement;

		btn.disabled = true;
		btn.textContent = 'Saving...';

		if (this.data().isEditing) {
			this.httpClient.put(`${environment.apiUrl}/api/library/games/${this.formData.id}`, this.formData)
				.subscribe({
					next: (response) => {
						this.toastService.show('success', `<b>${this.formData.title}</b> updated successfully`);

						this.modalService.close(ModalType.ADMIN_GAME);

						this.gameService.refreshGames();
					},
					error: (error) => {
						this.toastService.show('error', error.error.message || 'Failed to update game');

						btn.disabled = false;
						btn.textContent = 'Update';
					}
				});
		} else {
			this.httpClient.post(`${environment.apiUrl}/api/library/games`, this.formData)
				.subscribe({
					next: (response) => {
						this.toastService.show('success', `<b>${this.formData.title}</b> added successfully`);

						this.modalService.close(ModalType.ADMIN_GAME);

						this.gameService.refreshGames();
					},
					error: (error) => {
						this.toastService.show('error', error.error.message || 'Failed to add game');

						btn.disabled = false;
						btn.textContent = 'Create';
					}
				});
		}
	}

}
