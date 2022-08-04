import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routeg4Page } from './routeg4.page';

const routes: Routes = [
  {
    path: '',
    component: Routeg4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routeg4PageRoutingModule {}
