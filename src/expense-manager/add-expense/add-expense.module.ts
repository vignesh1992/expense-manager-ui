import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { AddExpenseRoutes } from '../routing/add-expense.routing';

import { AddExpenseComponent } from './add-expense.component';

@NgModule({
  declarations: [
    AddExpenseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AddExpenseRoutes)
  ],
  providers: [],
  bootstrap: [AddExpenseComponent]
})
export class AddExpenseModule { }
