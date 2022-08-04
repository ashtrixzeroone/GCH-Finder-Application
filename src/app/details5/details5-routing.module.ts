import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Details5Page } from './details5.page';

const routes: Routes = [
  {
    path: '',
    component: Details5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Details5PageRoutingModule {}
