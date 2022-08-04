import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Details9Page } from './details9.page';

const routes: Routes = [
  {
    path: '',
    component: Details9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Details9PageRoutingModule {}
