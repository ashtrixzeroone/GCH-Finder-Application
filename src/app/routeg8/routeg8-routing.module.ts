import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routeg8Page } from './routeg8.page';

const routes: Routes = [
  {
    path: '',
    component: Routeg8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routeg8PageRoutingModule {}
