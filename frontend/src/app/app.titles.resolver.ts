import { ResolveFn } from "@angular/router";
import {inject} from '@angular/core';
import {GameService} from './services/game/game.service';

export const gameInfo: ResolveFn<string> = (route) => {
	return inject(GameService).getGameById(Number(route.paramMap.get('id')))!.title!
};
