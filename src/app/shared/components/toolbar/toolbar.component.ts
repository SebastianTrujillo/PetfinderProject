import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {

	public appName = 'PetFinder';

	/**
	 * @name constructor
	 * @description Method constructor
	 */
	constructor() { }

	/**
	 * @name ngOnInit
	 * @description Method to ngOnInit
	 * @returns {void}
	 */
	ngOnInit(): void {
	}
}