import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { TryGuardGuard } from './guards/try-guard.guard';

const routes: Routes = [
  {
    path: 'teacher',
    component: ChildAComponent,
    canActivate: [TryGuardGuard]
  },
  {
    path: 'student',
    component: ChildBComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
