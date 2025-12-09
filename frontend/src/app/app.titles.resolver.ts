import { ResolveFn } from "@angular/router";
import {inject} from '@angular/core';
import {LibraryService} from './services/library/library.service';

export const libraryViewer: ResolveFn<string> = (route) => {
	return inject(LibraryService).getGameById(Number(route.paramMap.get('id')))!.title!
};
