import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutegPage } from './routeg.page';

const routes: Routes = [
  {
    path: '',
    component: RoutegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutegPageRoutingModule {}
