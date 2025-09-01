import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompCanActivateComponent } from './comp-can-activate/comp-can-activate.component';

const routes: Routes = [
  {
    path: '',
    component: CompCanActivateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleARoutingModule {}
