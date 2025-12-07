import {Component, DOCUMENT, effect, inject, NO_ERRORS_SCHEMA, Renderer2} from '@angular/core';
import {SettingsService} from './services/setting/setting.service';
import {StateService} from "./services/state/state.service";
import {Sidebar} from "./components/sidebar/sidebar";
import {Setting} from "./components/setting/setting";
import {GameService} from './services/game/game.service';
import {TabBar} from './components/top-tab/top-bar';
import {RouterOutlet} from '@angular/router';
import {RouterHandler} from './services/router-handler/router-handler.service';

@Component({
	selector: 'app-root',
	imports: [
		Sidebar,
		Setting,
		TabBar,
		RouterOutlet
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App {

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
