import {Routes} from '@angular/router';
import {Home} from './viewers/home/home.component';
import {Download} from './viewers/download/download.component';
import {Library} from './viewers/library/library.component';
import {LibraryViewer} from './viewers/library-viewer/library-viewer.component';
import {libraryViewer} from './app.titles.resolver';
import {Launcher} from './viewers/launcher/launcher.component';
import {Loading} from './viewers/loading/loading.component';

export const routes: Routes = [
	{
		path: 'home',
		redirectTo: '',
	},
	{
		path: '',
		component: Launcher,
		title: 'Launcher',
		children: [
			{
				path: '',
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
			}
		]
	},
	{
		path: 'loading',
		component: Loading,
		title: 'Loading',
	},
];
