import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Details7Page } from './details7.page';

const routes: Routes = [
  {
    path: '',
    component: Details7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Details7PageRoutingModule {}
