import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemeType} from '../../helper/helper.viewer';

@Component({
	selector: 'app-setting',
	imports: [],
	templateUrl: './setting.html',
	styleUrl: './setting.scss',
})
export class Setting {
	@Input() theme: ThemeType = 'dark';
	@Input() isDiscordRpcEnabled = true;

	@Output() closeClick = new EventEmitter<void>();
	@Output() themeChange = new EventEmitter<void>();
	@Output() discordRpcChange = new EventEmitter<void>();
}
