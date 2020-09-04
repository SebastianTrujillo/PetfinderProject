import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
	providedIn: 'root'
})
export class AnimalsService {

	/**
	 * @name constructor
	 * @description Method constructor
	 * @param {HttpClient} http - http
	 */
	constructor(
		private http: HttpClient
	) { }

	/**
	 * @name getToken
	 * @description Method to get token
	 * @returns {Promise}
	 */
	public async getToken(): Promise<any> {
		let url: any = `${ environment.base_url_api }/oauth2/token`;
		let getTokenRes: any = await (this.http.post<any[]>(url, environment.client_credentials)).toPromise();
		return(getTokenRes.access_token);
	}

	/**
	 * @name getAnimals
	 * @description Method to get animals
	 * @param {string} specie - specie
	 * @param {number} limit - limit
	 * @param {number} page - page
	 * @returns {Promise}
	 */
	public async getAnimals(specie: string = "all", limit: number = 10, page: number = 1): Promise<any> {
		let url: any;
		let accessToken: string = await this.getToken();
		if ( specie === "all" ) {
			url = `${ environment.base_url_api }/animals?status=adoptable&limit=${ limit }&page=${ page }`;
		} else {
			url = `${ environment.base_url_api }/animals?type=${ specie }&status=adoptable&limit=${ limit }&page=${ page }`;
		}
		let headers: any = { headers: { Authorization: `Bearer ${ accessToken }` } };
		let getAnimalsRes: any = await (this.http.get<any[]>(url, headers)).toPromise();
		return(getAnimalsRes);
	}

	/**
	 * @name getAnimal
	 * @description Method to get animal
	 * @param {string} animalId - animalId
	 * @returns {Promise}
	 */
	public async getAnimal(animalId: string): Promise<any> {
		let accessToken: string = await this.getToken();
		let url = `${ environment.base_url_api }/animals/${ animalId }`;
		let headers: any = { headers: { Authorization: `Bearer ${ accessToken }` } };
		let getAnimalRes: any = await (this.http.get<any>(url, headers)).toPromise();
		return(getAnimalRes);
	}
}