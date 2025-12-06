import {Routes} from '@angular/router';
import {Home} from './viewers/home/home';
import {Download} from './viewers/download/download';
import {Library} from './viewers/library/library.component';
import {GameInfo} from './viewers/game-info/game-info.component';

export const routes: Routes = [
	{
		path: 'home',
		redirectTo: '',
	},
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
		path: 'game/info/:id',
		component: GameInfo,
		title: 'Game Info',
	}
];
