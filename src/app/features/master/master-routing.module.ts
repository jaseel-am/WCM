import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsLayoutComponent } from '../../layouts/details-layout/details-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsLayoutComponent, // Use Details Layout for transaction module
    children: [
      { path: 'user', loadComponent: () => import('./user/user.component').then(m => m.UserComponent) },
      { path: 'role', loadComponent: () => import('./role/role.component').then(m => m.RoleComponent) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
