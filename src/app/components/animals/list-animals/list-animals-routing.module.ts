import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAnimalsComponent } from './list-animals.component';


const routes: Routes = [{ path: '', component: ListAnimalsComponent }];


@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class ListAnimalsRoutingModule { }