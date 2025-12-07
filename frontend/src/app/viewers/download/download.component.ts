import {Component, inject} from '@angular/core';
import {LauncherService} from '../../services/launcher/launcher.service';

@Component({
	selector: 'app-download',
	imports: [],
	templateUrl: './download.component.html',
	styleUrl: './download.component.scss',
})
export class Download {

	protected readonly launcherService: LauncherService = inject(LauncherService)

}
