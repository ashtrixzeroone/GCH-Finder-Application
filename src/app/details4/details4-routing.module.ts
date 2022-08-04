import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Details4Page } from './details4.page';

const routes: Routes = [
  {
    path: '',
    component: Details4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Details4PageRoutingModule {}
