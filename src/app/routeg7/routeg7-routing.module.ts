import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routeg7Page } from './routeg7.page';

const routes: Routes = [
  {
    path: '',
    component: Routeg7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routeg7PageRoutingModule {}
