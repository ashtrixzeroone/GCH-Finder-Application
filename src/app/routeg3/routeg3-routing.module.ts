import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routeg3Page } from './routeg3.page';

const routes: Routes = [
  {
    path: '',
    component: Routeg3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routeg3PageRoutingModule {}
