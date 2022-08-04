import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BedSpacePage } from './bed-space.page';

const routes: Routes = [
  {
    path: '',
    component: BedSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BedSpacePageRoutingModule {}
