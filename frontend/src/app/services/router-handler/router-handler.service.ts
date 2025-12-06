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

	private router = inject(Router);
	private state = inject(StateService);

	constructor() {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationStart) {
				this.state.openRouterView();
			}
		});
	}

}
