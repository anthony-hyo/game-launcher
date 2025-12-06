import {inject, Injectable, signal} from '@angular/core';
import {Game} from '../../interfaces/IGame';
import {Tab} from '../../interfaces/ITab';
import {ViewType} from '../../helper/helper.viewer';
import {Router} from '@angular/router';
import {random} from '../../helper/helper.random';
import {GameService} from '../game/game.service';

@Injectable({providedIn: 'root'})
export class StateService {

	private router = inject(Router);

	public gameService = inject(GameService);

	activeView = signal<'router' | string>('router');
	openTabs = signal<Tab[]>([]);

	openRouterView() {
		console.log('router')
		this.activeView.set('router');
	}

	openTab(viewId: ViewType) {
		this.activeView.set(viewId);
	}

	closeTab(tabIdToClose: string): void {
		const tabs = this.openTabs();
		const tabIndexToClose = tabs.findIndex(tab => tab.tabId === tabIdToClose);

		if (tabIndexToClose === -1) {
			return;
		}

		if (this.activeView() === tabIdToClose) {
			if (tabs.length === 1) {
				this.router.navigate(['/library']);
			} else {
				const newActiveIndex = tabIndexToClose >= tabs.length - 1 ? tabIndexToClose - 1 : tabIndexToClose;
				this.activeView.set(tabs[newActiveIndex].tabId);
			}
		}

		this.openTabs.update(currentTabs => currentTabs.filter(tab => tab.tabId !== tabIdToClose));
	}

	onPlayGame(game: Game): void {
		this.gameService.incrementPlayCount(game.title);

		const existingTab = this.openTabs().find(tab => tab.game.title === game.title);

		if (existingTab) {
			this.activeView.set(existingTab.tabId);
			return;
		}

		const newTab: Tab = {
			tabId: random(),
			game: game,
			url: game.url
		};

		this.openTabs.update(tabs => [...tabs, newTab]);

		this.activeView.set(newTab.tabId);
	}

}
