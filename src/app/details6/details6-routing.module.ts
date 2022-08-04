import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Details6Page } from './details6.page';

const routes: Routes = [
  {
    path: '',
    component: Details6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Details6PageRoutingModule {}
