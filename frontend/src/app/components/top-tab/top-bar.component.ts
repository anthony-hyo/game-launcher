import {Component, effect, ElementRef, inject, signal, viewChild} from '@angular/core';
import {DOCUMENT, NgClass} from '@angular/common';
import {StateService} from '../../services/state/state.service';
import {RouterLink} from '@angular/router';
import {TopBarTab} from '../top-bar-tab/top-bar-tab.component';
import {environment} from '../../../environments/environment';

@Component({
	selector: 'app-top-bar',
	imports: [
		RouterLink,
		NgClass,
		TopBarTab
	],
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.scss',
})
export class TopBar {

	protected readonly environment = environment;

	private readonly document = inject(DOCUMENT);
	private readonly scrollArea = viewChild.required<ElementRef>('scrollArea')

	protected readonly state = inject(StateService);

	protected readonly isFullscreen = signal(false);
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

	protected minimizeApp(): void {
		console.log('Application minimized to tray');
	}

	protected toggleMaximizeApp(): void {
		if (!this.document.fullscreenElement) {
			this.document.documentElement.requestFullscreen().then(() => {
				this.isFullscreen.set(true);
			});
			return
		}

		if (this.document.exitFullscreen) {
			this.document.exitFullscreen().then(() => {
				this.isFullscreen.set(false);
			});
		}
	}

	protected closeApp(): void {
		window.close();
	}

}
