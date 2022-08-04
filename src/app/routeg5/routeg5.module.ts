import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routeg5PageRoutingModule } from './routeg5-routing.module';

import { Routeg5Page } from './routeg5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Routeg5PageRoutingModule
  ],
  declarations: [Routeg5Page]
})
export class Routeg5PageModule {}
