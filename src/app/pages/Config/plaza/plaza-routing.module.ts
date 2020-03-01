import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlazaComponent } from './plaza.component';


const routes: Routes = [
  {path: '', component: PlazaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlazaRoutingModule { }
