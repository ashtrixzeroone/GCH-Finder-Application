import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Details8Page } from './details8.page';

const routes: Routes = [
  {
    path: '',
    component: Details8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Details8PageRoutingModule {}
