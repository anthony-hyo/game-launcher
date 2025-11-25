export interface Config {
	deploys: ConfigDeploy[];
}

export interface ConfigDeploy {
	system: string;
	version: string;
	details: string[];
}
