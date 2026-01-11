import {Component, inject} from '@angular/core';
import {SettingsService} from '../../services/setting/setting.service';
import {StateService} from '../../services/state/state.service';
import {ModalType} from '../../constants/modal.const';

@Component({
	selector: 'app-setting',
	imports: [],
	templateUrl: './setting.component.html',
	styleUrl: './setting.component.scss',
})
export class Setting {

	stateService = inject(StateService);
	settings = inject(SettingsService);

	protected readonly ModalType = ModalType;
}
