import {LauncherDeployResponse} from './launcher-deploy-response.model';

export interface LauncherDeploy extends LauncherDeployResponse {
	description_split: string[];
}
