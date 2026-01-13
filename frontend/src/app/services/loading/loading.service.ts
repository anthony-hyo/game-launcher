import {Injectable, signal} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {

	public readonly loadingProgress = signal<number>(0);

	public readonly loadingText = signal<string>('Loading...');

	public setProgress(value: number): void {
		this.loadingProgress.set(value);
	}

	public setText(text: string): void {
		this.loadingText.set(text);
	}

}
