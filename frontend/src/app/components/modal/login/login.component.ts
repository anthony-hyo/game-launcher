import {Component, inject} from '@angular/core';
import {StateService} from '../../../services/state/state.service';
import {SettingsService} from '../../../services/setting/setting.service';
import {ModalType} from '../../../constants/modal.const';
import {Modal} from '../modal.component';

@Component({
  selector: 'app-login',
	imports: [
		Modal
	],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class Login {

  stateService = inject(StateService);
  settings = inject(SettingsService);

  protected readonly ModalType = ModalType;

}
