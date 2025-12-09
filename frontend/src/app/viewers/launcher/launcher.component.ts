import {Component, DOCUMENT, effect, inject, NO_ERRORS_SCHEMA, Renderer2} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Sidebar} from '../../components/sidebar/sidebar.component';
import {TopBar} from '../../components/top-tab/top-bar.component';
import {LibraryService} from '../../services/library/library.service';
import {StateService} from '../../services/state/state.service';
import {SettingsService} from '../../services/setting/setting.service';
import {RouterHandler} from '../../services/router-handler/router-handler.service';
import {Setting} from '../../components/setting/setting.component';
import {environment} from '../../../environments/environment';

@Component({
	selector: 'app-launcher',
	imports: [
		RouterOutlet,
		Sidebar,
		TopBar,
		Setting
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	templateUrl: './launcher.component.html',
	styleUrl: './launcher.component.scss',
})
export class Launcher {

	protected readonly state = inject(StateService);
	protected readonly settings = inject(SettingsService);

	protected readonly environment = environment;

	private readonly renderer = inject(Renderer2);
	private readonly document = inject(DOCUMENT);

	constructor(_routerHandler: RouterHandler) {
		effect(() => {
			if (this.settings.theme() === 'light') {
				this.renderer.addClass(this.document.documentElement, 'light');
			} else {
				this.renderer.removeClass(this.document.documentElement, 'light');
			}
		});
	}

}
