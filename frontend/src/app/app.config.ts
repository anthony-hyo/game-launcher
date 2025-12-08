import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withHashLocation, withRouterConfig, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZoneChangeDetection({eventCoalescing: true}),
		provideRouter(routes,
			withRouterConfig({
				onSameUrlNavigation: 'reload'
			}),
			...(environment.useHash ? [withHashLocation()] : []),
			withViewTransitions()
		),
		provideHttpClient(),
	]
};
