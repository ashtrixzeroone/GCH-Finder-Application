import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routeg2Page } from './routeg2.page';

const routes: Routes = [
  {
    path: '',
    component: Routeg2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routeg2PageRoutingModule {}
