import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule
  ],
  exports: [
    CustomersComponent
  ],
})
export class CustomersModule { }
