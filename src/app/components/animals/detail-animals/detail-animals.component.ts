import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalsService } from '../animals.service';
import { environment } from '../../../../environments/environment';
import { AnimalsI } from '../../../shared/models/animals.interface';

import {Location} from '@angular/common';


@Component({
	selector: 'app-detail-animals',
	templateUrl: './detail-animals.component.html',
	styleUrls: ['./detail-animals.component.scss']
})
export class DetailAnimalsComponent implements OnInit {

	public animal: any;
	public photoComingSoon: string = environment.photo_coming_soon;
	public loading: boolean;

	/**
	 * @name constructor
	 * @description Method constructor
	 * @param {ActivatedRoute} ActivatedRoute - ActivatedRoute
	 * @param {AnimalsService} AnimalsService - AnimalsService
	 * @param {Location} Location - Location
	 */
	constructor(
		private route: ActivatedRoute,
		private animalsService: AnimalsService,
		private location: Location
	) { }

	/**
	 * @name ngOnInit
	 * @description Method to ngOnInit
	 * @returns {void}
	 */
	ngOnInit(): void {
		this.loading = true;
		const animalId = this.route.snapshot.params.id;
		this.getAnimal(animalId);
	}

	/**
	 * @name backPage
	 * @description Method to back page
	 * @returns {Promise}
	 */
	public backPage(): void {
		this.location.back();
	}

	/**
	 * @name getAnimal
	 * @description Method to get animal
	 * @param {string} animalId - animalId
	 * @returns {Promise}
	 */
	public async getAnimal(animalId: string): Promise<any> {
		let getAnimalRes: any = await this.animalsService.getAnimal(animalId);
		this.animal = getAnimalRes.animal;
		this.loading = false;
	}
}