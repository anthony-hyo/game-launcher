import {Component, computed, DOCUMENT, effect, inject, OnInit, Renderer2} from '@angular/core';
import {SettingsService} from './services/setting/setting';
import {DomSanitizer} from '@angular/platform-browser';
import {StateService} from "./services/state/state";
import {Game, random, Tab} from "./util";
import {Sidebar} from "./shared/sidebar/sidebar";
import {Launcher} from "./pages/launcher/launcher";
import {Download} from "./pages/download/download";
import {Home} from "./pages/home/home";
import {Setting} from "./shared/setting/setting";
import {GameService} from './services/game/game';
import {TabBar} from './shared/top-tab/top-bar';

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
	isLauncherViewActive = computed(() => this.state.activeView() === 'launcher');
	private sanitizer = inject(DomSanitizer);
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

	onSelectGame(game: Game): void {
		this.state.selectGame(game);
	}

	onViewClick(view: string): void {
		this.state.selectView(view as any);
	}

	onLibraryClick(): void {
		this.state.goToLauncher();
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
				url: this.sanitizer.bypassSecurityTrustResourceUrl(game.url)
			};
			this.state.addTab(newTab);
		}
	}

	onCloseTab(event: MouseEvent, tabIdToClose: string): void {
		event.stopPropagation();
		this.state.closeTab(tabIdToClose);
	}

}
