import {Component, inject} from '@angular/core';
import {LauncherService} from '../../services/launcher/launcher.service';

@Component({
	selector: 'app-download',
	imports: [],
	templateUrl: './download.html',
	styleUrl: './download.scss',
})
export class Download {

	protected readonly launcherService: LauncherService = inject(LauncherService)

}
