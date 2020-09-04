import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{
				path: 'animals',
				loadChildren: () => import('../animals/list-animals/list-animals.module')
				.then(m => m.ListAnimalsModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})

export class AdminRoutingModule { }