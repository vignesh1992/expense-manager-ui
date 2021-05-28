import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { StatisticsRoutes } from '../routing/statistics.routing';

import { StatisticsComponent } from './statistics.component';

@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(StatisticsRoutes)
  ],
  providers: [],
  bootstrap: [StatisticsComponent]
})
export class StatisticsModule { }
