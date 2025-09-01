import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourthModuleRoutingModule } from './fourth-module-routing.module';
import { FourthModuleComponent } from './fourth-module.component';


@NgModule({
  declarations: [
    FourthModuleComponent
  ],
  imports: [
    CommonModule,
    FourthModuleRoutingModule
  ]
})
export class FourthModuleModule { }
