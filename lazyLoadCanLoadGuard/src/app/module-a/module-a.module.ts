import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { CompCanActivateComponent } from './comp-can-activate/comp-can-activate.component';


@NgModule({
  declarations: [
    CompCanActivateComponent
  ],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule { }
