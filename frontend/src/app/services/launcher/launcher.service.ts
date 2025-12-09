import {inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {LauncherDeploy} from '../../models/launcher-deploy.model';
import {LauncherDeployResponse} from '../../models/launcher-deploy-response.model';

@Injectable({
	providedIn: 'root',
})
export class LauncherService {

	private readonly http = inject(HttpClient)

	private readonly deploys: WritableSignal<LauncherDeploy[]> = signal<LauncherDeploy[]>([]);

	constructor() {
		this.http
			.get<LauncherDeployResponse[]>(`${environment.apiUrl}/api/launcher/deploys`)
			.subscribe(launcherDeploysResponse =>
				this.deploys.set(launcherDeploysResponse.map(launcherDeployResponse => ({
						...launcherDeployResponse,
						description_split: launcherDeployResponse.description.split(',')
					})
				))
			);
	}

	public get getDeploys(): Signal<LauncherDeploy[]> {
		return this.deploys.asReadonly();
	}

}
