import {inject, Injectable, signal} from '@angular/core';
import {LibraryGame} from '../../models/library-game.model';
import {Tab} from '../../models/tab.model';
import {ViewType} from '../../helper/helper.viewer';
import {Router} from '@angular/router';
import {random} from '../../helper/helper.random';
import {LibraryService} from '../library/library.service';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class StateService {

	private readonly router = inject(Router);
	private readonly gameService = inject(LibraryService);
	private readonly sanitizer = inject(DomSanitizer);

	activeView = signal<'router' | string>('router'); //todo: make private
	openTabs = signal<Map<string, Tab>>(new Map());

	public get isRouterActive(): boolean {
		return this.activeView() === 'router';
	}

	public openRouterView(): void {
		this.activeView.set('router');
	}

	public openTab(viewId: ViewType): void {
		this.activeView.set(viewId);
	}

	public closeTab(event: MouseEvent, tab: Tab): void {
		event.stopPropagation(); //Prevent tab click propagation

		const openTabs = this.openTabs();

		const nextTab = this.getNearestTab(tab.tabId)

		openTabs.delete(tab.tabId)

		if (openTabs.size < 1) {
			this.router.navigate(["/library"])
				.catch(console.error);
			return;
		}

		if (nextTab) {
			this.activeView.set(openTabs.get(nextTab)!.tabId)
			return;
		}

		this.router.navigate(["/library"])
			.catch(console.error);
	}

	public playGame(url: string, game: LibraryGame): void {
		this.gameService.incrementPlayCount(game.title);

		const newTab: Tab = {
			tabId: random(),

			title: 'Loading..',

			rawUrl: url,
			safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl(url),

			isWhitelistedDomain: true,
		};

		this.openTabs().set(newTab.tabId, newTab);

		this.activeView.set(newTab.tabId);
	}

	/**
	 * Find the nearest tab available
	 *
	 * @param tabId
	 */
	private getNearestTab(tabId: string): undefined | string {
		const keysArr = Array.from(this.openTabs().keys());

		const removedIndex = keysArr.indexOf(tabId);

		const previousKey = keysArr[removedIndex - 1]

		if (previousKey) {
			return previousKey;
		}

		const nextKey = keysArr[removedIndex + 1]

		if (nextKey) {
			return nextKey;
		}

		return undefined
	}

}
