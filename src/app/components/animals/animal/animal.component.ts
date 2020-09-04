import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AnimalsI } from '../../../shared/models/animals.interface';


@Component({
	selector: 'app-animal',
	templateUrl: './animal.component.html',
	styleUrls: ['./animal.component.scss']
})

export class AnimalComponent implements OnInit {

	public photoComingSoon: string = environment.photo_coming_soon;

	@Input() animal: any;
	
	/**
	 * @name ngOnInit
	 * @description Method to ngOnInit
	 * @returns {void}
	 */
	ngOnInit() {
	}
}