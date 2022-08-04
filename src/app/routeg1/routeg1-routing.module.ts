import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routeg1Page } from './routeg1.page';

const routes: Routes = [
  {
    path: '',
    component: Routeg1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routeg1PageRoutingModule {}
