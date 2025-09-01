import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { GuardCanActivateGuard } from './guardFiles/guard-can-activate.guard';
import { GuardCanLoadGuard } from './guardFiles/guard-can-load.guard';

const routes: Routes = [
  {
    path: '',
    component: CompHomeComponent,
  },
  {
    path: 'module-a',
    loadChildren: () =>
      import('./module-a/module-a.module').then(
        (module) => module.ModuleAModule
      ),
    canActivate: [GuardCanActivateGuard],
  },
  {
    path: 'module-b',
    loadChildren: () =>
      import('./module-b/module-b.module').then(
        (module) => module.ModuleBModule
      ),
    canLoad: [GuardCanLoadGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
