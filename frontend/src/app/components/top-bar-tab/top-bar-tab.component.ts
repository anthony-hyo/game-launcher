import {AfterViewInit, Component, ElementRef, inject, input} from '@angular/core';
import {StateService} from '../../services/state/state.service';
import {NgClass} from '@angular/common';
import {Tab} from '../../models/tab.model';

@Component({
	selector: 'app-top-bar-tab',
	imports: [
		NgClass
	],
	templateUrl: './top-bar-tab.component.html',
	styleUrl: './top-bar-tab.component.scss',
})
export class TopBarTab implements AfterViewInit {

	protected readonly state = inject(StateService);
	protected readonly host = inject(ElementRef)

	public tab = input.required<Tab>();

	ngAfterViewInit(): void {
		this.host.nativeElement.scrollIntoView({behavior: 'smooth', inline: 'center'});
	}

}
