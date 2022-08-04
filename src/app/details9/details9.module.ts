import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Details9PageRoutingModule } from './details9-routing.module';

import { Details9Page } from './details9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Details9PageRoutingModule
  ],
  declarations: [Details9Page]
})
export class Details9PageModule {}
