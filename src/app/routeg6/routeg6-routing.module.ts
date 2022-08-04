import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routeg6Page } from './routeg6.page';

const routes: Routes = [
  {
    path: '',
    component: Routeg6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Routeg6PageRoutingModule {}
