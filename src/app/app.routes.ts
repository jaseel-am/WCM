import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'general/inbox', pathMatch: 'full' },
    { path: 'master', loadChildren: () => import('./pages/master/master.module').then(m => m.MasterModule) },
    { path: 'general', loadChildren: () => import('./pages/general/general.module').then(m => m.GeneralModule) },
    { path: 'transaction', loadChildren: () => import('./pages/transaction/transaction.module').then(m => m.TransactionModule) },
    { path: 'report', loadChildren: () => import('./pages/report/report.module').then(m => m.ReportModule) },
    { path: '**', redirectTo: 'report/dashboard' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
