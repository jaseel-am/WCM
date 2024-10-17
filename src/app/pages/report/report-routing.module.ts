import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from '../../layouts/master-layout/master-layout.component';

const routes: Routes = [
    {
      path: '',
      component: MasterLayoutComponent, // Use Master Layout for all master module components
      children: [
        { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
        // { path: 'salesreport', loadComponent: () => import('./salesreport/sales-report.component').then(m => m.SalesReportComponent) },
        // { path: 'purchasereport', loadComponent: () => import('./purchasereport/purchase-report.component').then(m => m.PurchaseReportComponent) },
    ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule { }
