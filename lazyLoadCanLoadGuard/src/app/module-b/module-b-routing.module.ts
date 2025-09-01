import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompCanLoadComponent } from './comp-can-load/comp-can-load.component';

const routes: Routes = [
  {
    path: '',
    component: CompCanLoadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleBRoutingModule {}
