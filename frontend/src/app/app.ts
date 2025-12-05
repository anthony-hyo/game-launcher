import {Component, computed, DOCUMENT, effect, inject, NO_ERRORS_SCHEMA, OnInit, Renderer2} from '@angular/core';
import {SettingsService} from './services/setting/setting.service';
import {StateService} from "./services/state/state.service";
import {Sidebar} from "./components/sidebar/sidebar";
import {Launcher} from "./viewers/launcher/launcher";
import {Download} from "./viewers/download/download";
import {Home} from "./viewers/home/home";
import {Setting} from "./components/setting/setting";
import {GameService} from './services/game/game.service';
import {TabBar} from './components/top-tab/top-bar';
import {Game} from './interfaces/IGame';
import {Tab} from './interfaces/ITab';
import {random} from './helper/helper.random';

@Component({
	selector: 'app-root',
	imports: [
		Sidebar,
		Launcher,
		Download,
		Home,
		Setting,
		TabBar
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App implements OnInit {
	// Injected services
	gameService = inject(GameService);
	state = inject(StateService);
	settings = inject(SettingsService);

	// Computed properties
	selectedGameTitle = computed(() => this.state.selectedGame()?.title ?? null);
	private renderer = inject(Renderer2);
	private document = inject(DOCUMENT);

	constructor() {
		// Apply theme changes to DOM
		effect(() => {
			if (this.settings.theme() === 'dark') {
				this.renderer.addClass(this.document.documentElement, 'dark');
				this.renderer.removeClass(this.document.documentElement, 'light');
			} else {
				this.renderer.removeClass(this.document.documentElement, 'dark');
				this.renderer.addClass(this.document.documentElement, 'light');
			}
		});
	}

	ngOnInit(): void {
	}

	onPlayGame(game: Game): void {
		if (!game.url || game.url === '#') return;

		this.gameService.incrementPlayCount(game.title);

		const existingTab = this.state.openTabs().find(tab => tab.game.title === game.title);
		if (existingTab) {
			this.state.selectView(existingTab.id);
		} else {
			const newTab: Tab = {
				id: random(),
				game: game,
				url: game.url
			};
			this.state.addTab(newTab);
		}
	}


}
