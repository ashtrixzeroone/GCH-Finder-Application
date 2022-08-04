import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routeg3PageRoutingModule } from './routeg3-routing.module';

import { Routeg3Page } from './routeg3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Routeg3PageRoutingModule
  ],
  declarations: [Routeg3Page]
})
export class Routeg3PageModule {}
