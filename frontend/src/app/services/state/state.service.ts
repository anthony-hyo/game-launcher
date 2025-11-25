import {Injectable, signal} from '@angular/core';
import {Game} from '../../interfaces/IGame';
import {Tab} from '../../interfaces/ITab';
import {ViewType} from '../../helper/helper.viewer';

@Injectable({providedIn: 'root'})
export class StateService {

	// UI State
	isLoading = signal<boolean>(true);
	loadingText = signal<string>('Initializing...');
	loadingProgress = signal<number>(0);

	// Navigation
	activeView = signal<ViewType>('home');
	selectedGame = signal<Game | null>(null);
	openTabs = signal<Tab[]>([]);
	viewingGameDetail = signal<boolean>(false);

	// Image loading state
	imageLoaded = signal<Record<string, boolean>>({});

	selectGame(game: Game): void {
		this.selectedGame.set(game);
		this.activeView.set('launcher');
		this.viewingGameDetail.set(true);
	}

	selectGameFromGrid(game: Game): void {
		this.selectedGame.set(game);
		this.viewingGameDetail.set(true);
	}

	showLibraryGrid(): void {
		this.viewingGameDetail.set(false);
	}

	selectView(viewId: ViewType): void {
		this.activeView.set(viewId);
	}

	closeTab(tabIdToClose: string): void {
		const tabs = this.openTabs();
		const tabIndexToClose = tabs.findIndex(tab => tab.id === tabIdToClose);

		if (tabIndexToClose === -1) return;

		if (this.activeView() === tabIdToClose) {
			if (tabs.length === 1) {
				this.activeView.set('launcher');
			} else {
				const newActiveIndex = tabIndexToClose >= tabs.length - 1 ? tabIndexToClose - 1 : tabIndexToClose;
				this.activeView.set(tabs[newActiveIndex].id);
			}
		}

		this.openTabs.update(currentTabs => currentTabs.filter(tab => tab.id !== tabIdToClose));
	}

	addTab(tab: Tab): void {
		this.openTabs.update(tabs => [...tabs, tab]);
		this.activeView.set(tab.id);
	}

	goToLauncher(): void {
		this.selectView('launcher');
		this.viewingGameDetail.set(false);
	}

	onImageLoad(gameTitle: string): void {
		this.imageLoaded.update(states => ({...states, [gameTitle]: true}));
	}

	updateLoadingState(text: string, progress: number): void {
		this.loadingText.set(text);
		this.loadingProgress.set(progress);
	}

	finishLoading(): void {
		this.isLoading.set(false);
	}

	updateSelectedGame(game: Game | null): void {
		this.selectedGame.set(game);
	}

}
