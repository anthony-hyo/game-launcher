import {inject, Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {StateService} from '../state/state.service';

/**
 * Router Lifecycle and Events
 * {@link NavigationStart}	Occurs when navigation begins and contains the requested URL.
 * https://angular.dev/guide/routing/lifecycle-and-events#analytics-tracking
 */
@Injectable({providedIn: 'root'})
export class RouterHandler {

	private readonly stateService = inject(StateService);

	private readonly router = inject(Router);

	constructor() {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.stateService.openRouterView();
			}
		});
	}

}
