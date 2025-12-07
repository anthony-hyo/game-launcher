import { ResolveFn } from "@angular/router";
import {inject} from '@angular/core';
import {GameService} from './services/game/game.service';

export const libraryViewer: ResolveFn<string> = (route) => {
	return inject(GameService).getGameById(Number(route.paramMap.get('id')))!.title!
};
