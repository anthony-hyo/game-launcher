import {Component, effect, ElementRef, inject, signal, viewChild} from '@angular/core';
import {DOCUMENT, NgClass} from '@angular/common';
import {StateService} from '../../services/state/state.service';
import {RouterLink} from '@angular/router';
import {TopBarTab} from '../top-bar-tab/top-bar-tab.component';

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

	scrollLeft() {
		const el = this.scrollArea().nativeElement;
		el.scrollBy({left: -150, behavior: 'smooth'});
	}

	scrollRight() {
		const el = this.scrollArea().nativeElement;
		el.scrollBy({left: 150, behavior: 'smooth'});
	}

	onWheelHorizontal(e: WheelEvent) {
		const el = e.currentTarget as HTMLElement;
		el.scrollLeft += e.deltaY;
	}

	minimizeApp(): void {
		console.log('Application minimized to tray');
	}

	toggleMaximizeApp(): void {
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

	closeApp(): void {
		console.log('Closing application...');

		setTimeout(() => {
			try {
				window.close();
			} catch (e) {
				console.warn('Cannot close window via script', e);
			}
		}, 1000);
	}

}
