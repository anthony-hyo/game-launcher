import {Component, inject} from '@angular/core';
import {SettingsService} from '../../services/setting/setting.service';

@Component({
	selector: 'app-setting',
	imports: [],
	templateUrl: './setting.component.html',
	styleUrl: './setting.component.scss',
})
export class Setting {

	settings = inject(SettingsService);

}
