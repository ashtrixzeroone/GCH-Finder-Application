import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routeg5Page } from './routeg5.page';

const routes: Routes = [
  {
    path: '',
    component: Routeg5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routeg5PageRoutingModule {}
