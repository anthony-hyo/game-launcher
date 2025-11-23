import {Component, computed, DOCUMENT, effect, inject, OnInit, Renderer2} from '@angular/core';
import {GameService} from "./services/game/game";
import {SettingsService} from './services/setting/setting';
import {DomSanitizer} from '@angular/platform-browser';
import {StateService} from "./services/state/state";
import {Game, Tab} from "./util";
import {Sidebar} from "./shared/sidebar/sidebar";
import {Launcher} from "./pages/launcher/launcher";
import {Download} from "./pages/download/download";
import {Home} from "./pages/home/home";
import {Setting} from "./shared/setting/setting";

@Component({
	selector: 'app-root',
	imports: [
		Sidebar,
		Launcher,
		Download,
		Home,
		Setting
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
		this.initializeApp();
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
				id: self.crypto.randomUUID(),
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

	private initializeApp(): void {
		const messages = [
			'Connecting to servers...',
			'Downloading assets...',
			'Verifying game files...',
			'Preparing the universe...',
			'Finalizing...'
		];

		let progress = 0;
		let messageIndex = 0;

		const interval = setInterval(() => {
			progress += Math.random() * 10;
			if (progress > 100) progress = 100;
			this.state.updateLoadingState(messages[messageIndex], progress);

			if (progress > (messageIndex + 1) * 20 && messageIndex < messages.length - 1) {
				messageIndex++;
				this.state.updateLoadingState(messages[messageIndex], progress);
			}

			if (progress >= 100) {
				clearInterval(interval);
				this.state.updateLoadingState('Ready!', 100);
				setTimeout(() => {
					this.state.finishLoading();
					this.state.selectedGame.set(this.gameService.getGames()()[0]);
				}, 500);
			}
		}, 400);
	}
}