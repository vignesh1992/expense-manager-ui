import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { HomeComponent } from '../home/home.component';
import { MainRoutes } from '../routing/main.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class MainModule { }
