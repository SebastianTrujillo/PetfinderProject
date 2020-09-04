import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

	public opened = false;

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