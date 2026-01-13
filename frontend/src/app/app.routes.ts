import {Routes} from '@angular/router';
import {Home} from './viewers/home/home.component';
import {Download} from './viewers/download/download.component';
import {Library} from './viewers/library/library.component';
import {LibraryViewer} from './viewers/library-viewer/library-viewer.component';
import {libraryViewer} from './app.titles.resolver';
import {Launcher} from './viewers/launcher/launcher.component';
import {Loading} from './viewers/loading/loading.component';
import {environment} from '../environments/environment';
import {Admin} from './viewers/admin/admin.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: "full"
	},
	{
		path: '',
		component: Launcher,
		title: 'Launcher',
		children: [
			...(!environment.showHome ? [
				{
					path: 'home',
					redirectTo: 'library',
				}
			] : []),
			{
				path: 'home',
				component: Home,
				title: 'Home',
			},
			{
				path: 'download',
				component: Download,
				title: 'Download',
			},
			{
				path: 'library',
				component: Library,
				title: 'Library',
			},
			{
				path: 'library/viewer/:id',
				component: LibraryViewer,
				title: libraryViewer
			},
			{
				path: 'admin',
				component: Admin,
				title: 'Library'
			}
		]
	},
	{
		path: 'loading',
		component: Loading,
		title: 'Loading',
	},
];
