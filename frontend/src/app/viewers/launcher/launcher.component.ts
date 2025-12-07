import {Component, DOCUMENT, effect, inject, NO_ERRORS_SCHEMA, Renderer2} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Sidebar} from '../../components/sidebar/sidebar';
import {TabBar} from '../../components/top-tab/top-bar';
import {GameService} from '../../services/game/game.service';
import {StateService} from '../../services/state/state.service';
import {SettingsService} from '../../services/setting/setting.service';
import {RouterHandler} from '../../services/router-handler/router-handler.service';
import {Setting} from '../../components/setting/setting';

@Component({
	selector: 'app-launcher',
	imports: [
		RouterOutlet,
		Sidebar,
		TabBar,
		Setting
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	templateUrl: './launcher.component.html',
	styleUrl: './launcher.component.scss',
})
export class Launcher {

	gameService = inject(GameService);
	state = inject(StateService);
	settings = inject(SettingsService);

	private renderer = inject(Renderer2);
	private document = inject(DOCUMENT);

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
