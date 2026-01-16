import {Component, inject} from '@angular/core';
import {SettingService} from '../../../services/setting/setting.service';
import {ModalType} from '../../../constants/modal.const';
import {Modal} from '../modal.component';
import {ModalChild} from "../modal-child.base";
import {environment} from '../../../../environments/environment';

@Component({
	selector: 'app-setting',
	imports: [
		Modal
	],
	templateUrl: './setting.component.html',
	styleUrl: './setting.component.scss',
})
export class Setting extends ModalChild {

	protected readonly environment = environment;
	protected readonly ModalType = ModalType;

	protected readonly settingService = inject(SettingService);

}
