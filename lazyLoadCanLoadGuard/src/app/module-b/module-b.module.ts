import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing.module';
import { CompCanLoadComponent } from './comp-can-load/comp-can-load.component';


@NgModule({
  declarations: [
    CompCanLoadComponent
  ],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class ModuleBModule { }
