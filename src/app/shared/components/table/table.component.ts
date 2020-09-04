import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AnimalsService } from '../../../components/animals/animals.service';


@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {

	public page: number = 1;
	public limit: number = 10;
	public length: number = 0;
	public total: number = 0;
	public loading: boolean;
	public specie: string = "all";
	public species: string[] = ["all", "barnyard", "bird", "cat", "dog", "horse", "rabbit", "scales-fins-other", "small-furry"];
	public displayedColumns: string[] = ['type', 'gender', 'size', 'breed', 'name', 'actions'];
	public dataSource = new MatTableDataSource();

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	@ViewChild(MatPaginator, {static: true}) pageEvent: PageEvent;
	@ViewChild(MatSort, {static: true}) sort: MatSort;

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
	ngOnInit(): void  {
		this.loading = true;
		this.getAnimals();
	}

	/**
	 * @name ngAfterViewInit
	 * @description Method to ngAfterViewInit
	 * @returns {void}
	 */
	ngAfterViewInit(): void  {
		this.dataSource.sort = this.sort;
	}

	/**
	 * @name applyFilter
	 * @description Method to apply filter
	 * @param {Event} event - event
	 * @returns {void}
	 */
	public applyFilter(event: Event): void {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	/**
	 * @name next
	 * @description Method to go to the next page
	 * @returns {void}
	 */
	public next(): void {
        if ( this.page >= this.total ) { return; }
		this.page += 1;
		this.loading = false;
        this.getAnimals();
	}
	
	/**
	 * @name prev
	 * @description Method to go to the back page
	 * @returns {void}
	 */
	public prev(): void {
        if ( this.page === 1 ) { return; }
        this.page -= 1;
		this.paginator.pageIndex = this.page;
		this.loading = false;
        this.getAnimals();
	}
	
	/**
	 * @name changePage
	 * @description Method to change page
	 * @param {any} event - event
	 * @returns {void}
	 */
    public changePage(event: any): void  {
        this.page = parseInt(event.pageIndex + 1);
		this.limit = parseInt(event.pageSize);
		this.loading = false;
        this.getAnimals();
	}

	/**
	 * @name getSpecieValue
	 * @description Method to get specie value
	 * @param {any} event - event
	 * @returns {void}
	 */
	public getSpecieValue(event: any): void  {
		this.specie = event.value;
		this.loading = false;
		this.getAnimals();
	}

	/**
	 * @name getAnimals
	 * @description Method to get animals
	 * @returns {Promise}
	 */
	public async getAnimals(): Promise<any> {
		let getAnimalsRes: any;
		if ( this.specie === "All" ) {
			getAnimalsRes = await this.animalsService.getAnimals(this.specie, this.limit, this.page);
		} else {
			getAnimalsRes = await this.animalsService.getAnimals(this.specie, this.limit, this.page);
		}
		this.loading = false;
		this.length = getAnimalsRes.pagination.total_count;
		this.dataSource.data = getAnimalsRes.animals;
	}
}