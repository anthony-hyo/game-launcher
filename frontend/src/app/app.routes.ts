import {Routes} from '@angular/router';
import {Home} from './viewers/home/home';
import {Download} from './viewers/download/download';
import {Library} from './viewers/library/library.component';
import {GameInfo} from './viewers/game-info/game-info.component';
import {gameInfo} from './app.titles.resolver';
import {Launcher} from './viewers/launcher/launcher.component';

export const routes: Routes = [
	{
		path: '',
		component: Launcher,
		title: 'Launcher',
		children: [
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
				title: gameInfo
			}
		],
	},
];
