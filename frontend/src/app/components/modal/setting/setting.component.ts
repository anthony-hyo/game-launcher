import {Component, inject} from '@angular/core';
import {SettingService} from '../../../services/setting/setting.service';
import {StateService} from '../../../services/state/state.service';
import {ModalType} from '../../../constants/modal.const';
import {Modal} from '../modal.component';

@Component({
	selector: 'app-setting',
	imports: [
		Modal
	],
	templateUrl: './setting.component.html',
	styleUrl: './setting.component.scss',
})
export class Setting {

	protected readonly ModalType = ModalType;

	protected readonly stateService = inject(StateService);
	protected readonly settingService = inject(SettingService);

}
