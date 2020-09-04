import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { DetailAnimalsComponent } from './components/animals/detail-animals/detail-animals.component';


@NgModule({
	declarations: [
		AppComponent,
		ToolbarComponent,
		ContainerAppComponent,
		DetailAnimalsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }