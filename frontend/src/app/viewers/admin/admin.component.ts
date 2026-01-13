import {Component, inject} from '@angular/core';
import {LibraryService} from '../../services/library/library.service';
import {ModalType} from '../../constants/modal.const';
import {StateService} from '../../services/state/state.service';
import {ToastService} from '../../services/toast/toast.service';

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
	protected readonly toastService = inject(ToastService);

}
