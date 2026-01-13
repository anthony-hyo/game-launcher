import {Component, effect, ElementRef, inject, signal, viewChild} from '@angular/core';
import {NgClass} from '@angular/common';
import {StateService} from '../../services/state/state.service';
import {RouterLink} from '@angular/router';
import {TopBarTab} from '../top-bar-tab/top-bar-tab.component';
import {environment} from '../../../environments/environment';
import {WindowControl} from '../window-control/window-control.component';

@Component({
	selector: 'app-top-bar',
	imports: [
		RouterLink,
		NgClass,
		TopBarTab,
		WindowControl
	],
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.scss',
})
export class TopBar {

	protected readonly environment = environment;

	protected readonly stateService = inject(StateService);

	protected readonly scrollArea = viewChild.required<ElementRef>('scrollArea');
	protected readonly isScrollable = signal(false);

	constructor() {
		effect(() => {
			const el = this.scrollArea().nativeElement;

			const updateScroll = () => this.isScrollable.set(el.scrollWidth > el.clientWidth);

			new ResizeObserver(updateScroll).observe(el);

			updateScroll();
		});
	}

	protected scrollLeft() {
		const el = this.scrollArea().nativeElement;
		el.scrollBy({left: -150, behavior: 'smooth'});
	}

	protected scrollRight() {
		const el = this.scrollArea().nativeElement;
		el.scrollBy({left: 150, behavior: 'smooth'});
	}

	protected onWheelHorizontal(e: WheelEvent) {
		const el = e.currentTarget as HTMLElement;
		el.scrollLeft += e.deltaY;
	}

	protected toggleSideBar(): void {
		this.stateService.isSideBarVisible.set(!this.stateService.isSideBarVisible());
	}
	
}
