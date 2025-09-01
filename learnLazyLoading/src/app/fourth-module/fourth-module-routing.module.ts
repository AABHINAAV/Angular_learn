import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthModuleComponent } from './fourth-module.component';

const routes: Routes = [{ path: '', component: FourthModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthModuleRoutingModule { }
