import {Component, inject} from '@angular/core';
import {LauncherService} from '../../services/launcher/launcher.service';
import {Footer} from '../../components/footer/footer.component';

@Component({
	selector: 'app-download',
	imports: [
		Footer
	],
	templateUrl: './download.component.html',
	styleUrl: './download.component.scss',
})
export class Download {

	protected readonly launcherService: LauncherService = inject(LauncherService)

}
