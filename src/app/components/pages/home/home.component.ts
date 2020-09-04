import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../../animals/animals.service';
import { AnimalsI } from '../../../shared/models/animals.interface';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

	public animals: AnimalsI[] = [];
	public limit: number = 100;
	public page: number = 1;
	public specie: string = "all";
	public loading: boolean;

	/**
	 * @name constructor
	 * @description Method constructor
	 * @param {AnimalsService} animalsService - animalsService
	 */
	constructor(
		private animalsService: AnimalsService
	) { }

	/**
	 * @name ngOnInit
	 * @description Method to ngOnInit
	 * @returns {void}
	 */
	ngOnInit(): void {
		this.loading = true;
		this.getAnimals();
	}

	/**
	 * @name getAnimals
	 * @description Method to get animals
	 * @returns {Promise}
	 */
	public async getAnimals(): Promise<any> {
		let getAnimalsRes: any = await this.animalsService.getAnimals(this.specie, this.limit, this.page);
		this.animals = getAnimalsRes.animals;
		this.loading = false;
	}
}