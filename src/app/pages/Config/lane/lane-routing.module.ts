import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaneComponent } from './lane.component';
const routes: Routes = [
  { path: '', component: LaneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaneRoutingModule { }
