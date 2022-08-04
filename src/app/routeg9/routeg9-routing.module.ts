import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routeg9Page } from './routeg9.page';

const routes: Routes = [
  {
    path: '',
    component: Routeg9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routeg9PageRoutingModule {}
