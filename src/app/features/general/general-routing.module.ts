import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from '../../layouts/master-layout/master-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent, // Use Master Layout for all master module components
    children: [
      { path: 'welltypelist', loadComponent: () => import('./welltypelist/welltypelist.component').then(m => m.WelltypelistComponent) },
      { path: 'inbox', loadComponent: () => import('./inbox/inbox.component').then(m => m.InboxComponent) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
