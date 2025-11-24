import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Config} from '../../util';

@Injectable({
	providedIn: 'root',
})
export class LauncherService {

	//TODO: Get Config from API using HttpClient
	private config: WritableSignal<Config> = signal({
		deploys: [
			{
				system: "Windows",
				version: "1.0.0",
				details: [
					"Lightweight and efficient",
					"Integrated web browser",
					"Discord Rich Presence",
					"Auto-updates",
				]
			},
			{
				system: "Mac",
				version: "1.0.0",
				details: [
					"Lightweight and efficient",
					"Integrated web browser",
					"Discord Rich Presence",
					"Auto-updates",
				]
			},
			{
				system: "Linux",
				version: "1.0.0",
				details: [
					"Lightweight and efficient",
					"Integrated web browser",
					"Discord Rich Presence",
					"Auto-updates",
				]
			}
		]
	})

	public getConfig(): Signal<Config> {
		return this.config.asReadonly()
	}

}
