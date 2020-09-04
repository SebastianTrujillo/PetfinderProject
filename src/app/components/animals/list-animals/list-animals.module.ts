import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAnimalsRoutingModule } from './list-animals-routing.module';
import { ListAnimalsComponent } from './list-animals.component';
import { MaterialModule } from '../../../material.module';
import { TableComponent } from '../../../shared/components/table/table.component';


@NgModule({
	declarations: [ListAnimalsComponent, TableComponent],
	imports: [
		CommonModule,
		ListAnimalsRoutingModule,
		MaterialModule
	]
})
export class ListAnimalsModule { }
