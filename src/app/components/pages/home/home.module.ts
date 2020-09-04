import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../../material.module';
import { AnimalComponent } from '../../animals/animal/animal.component';


@NgModule({
	declarations: [HomeComponent, AnimalComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		MaterialModule
	]
})

export class HomeModule { }