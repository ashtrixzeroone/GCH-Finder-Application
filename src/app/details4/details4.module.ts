import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Details4PageRoutingModule } from './details4-routing.module';

import { Details4Page } from './details4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Details4PageRoutingModule
  ],
  declarations: [Details4Page]
})
export class Details4PageModule {}
