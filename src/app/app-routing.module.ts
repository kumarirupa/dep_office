import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { UserComponent } from './pages/user/user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import { PlazaComponent } from './pages/Config/plaza/plaza.component';
//import { RolesComponent } from './pages/Config/roles/roles.component';
import { UnReviewedComponent } from './pages/transactions/un-reviewed/un-reviewed.component';
import { ReviewedComponent } from './pages/transactions/reviewed/reviewed.component';
import { AuthGuard } from './auth/auth.guard';
//import { LaneComponent } from './pages/Config/lane/lane.component';
//import { HardwareComponent } from './pages/Config/hardware/hardware.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'unreviewed', component: UnReviewedComponent, canActivate: [AuthGuard]},
  { path: 'reviewed', component: ReviewedComponent},
  // { path: 'roles', component: RolesComponent},
  // { path: 'hardware', component: HardwareComponent},
  // { path: 'plaza', component: PlazaComponent},
  // { path: 'lane', component: LaneComponent},
  // { path: 'config', loadChildren: () => import('./pages/Config/config.module').then(m => m.ConfigModule)},
  { path: 'lane', loadChildren: () => import('./pages/Config/lane/lane.module').then(m => m.LaneModule)},
  { path: 'plaza', loadChildren: () => import('./pages/Config/plaza/plaza.module').then(m => m.PlazaModule)},
  { path: 'roles', loadChildren: () => import('./pages/Config/roles/roles.module').then(m => m.RolesModule)},
  { path: 'hardware', loadChildren: () => import('./pages/Config/hardware/hardware.module').then(m => m.HardwareModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
