import {Component, inject, input} from '@angular/core';
import {StateService} from '../../services/state/state.service';
import {SettingsService} from '../../services/setting/setting.service';
import {ModalType} from '../../constants/modal.const';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class Modal {

  stateService = inject(StateService);
  settings = inject(SettingsService);

  protected readonly ModalType = ModalType;
  
  public readonly title = input.required<string>();

}
