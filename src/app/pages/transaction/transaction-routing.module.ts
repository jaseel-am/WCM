import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsLayoutComponent } from '../../layouts/details-layout/details-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsLayoutComponent, // Use Details Layout for transaction module
    children: [
      { path: 'generalinfo', loadComponent: () => import('./generalinfo/generalinfo.component').then(m => m.GeneralInfoComponent) },
      { path: 'scopeofwell', loadComponent: () => import('./scopeofwell/scopeofwell.component').then(m => m.ScopeofwellComponent) },
      { path: 'holesection', loadComponent: () => import('./holesection/holesection.component').then(m => m.HolesectionComponent) },
      { path: 'casing', loadComponent: () => import('./casing/casing.component').then(m => m.CasingComponent) },
      { path: 'cementing', loadComponent: () => import('./cementing/cementing.component').then(m => m.CementingComponent) },
      { path: 'mud', loadComponent: () => import('./mud/mud.component').then(m => m.MudComponent) },

      { path: 'geologicalpro', loadComponent: () => import('./geologicalpro/geologicalpro.component').then(m => m.GeologicalproComponent) },
      { path: 'formation', loadComponent: () => import('./formation/formation.component').then(m => m.FormationComponent) },
      { path: 'riskregister', loadComponent: () => import('./riskregister/riskregister.component').then(m => m.RiskregisterComponent) },

      // { path: 'sales', loadComponent: () => import('./sales/sales.component').then(m => m.SalesComponent) },
      // { path: 'purchase', loadComponent: () => import('./purchase/purchase.component').then(m => m.PurchaseComponent) },
      { path: 'timebreakdown', loadComponent: () => import('./timebreakdown/timebreakdown.component').then(m => m.TimebreakdownComponent) },
      { path: 'materialbreakdown', loadComponent: () => import('./materialbreakdown/materialbreakdown.component').then(m => m.MaterialbreakdownComponent) },
      { path: 'servicebreakdown', loadComponent: () => import('./servicebreakdown/servicebreakdown.component').then(m => m.ServicebreakdownComponent) },
      { path: 'costsummary', loadComponent: () => import('./costsummary/costsummary.component').then(m => m.CostsummaryComponent) },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
