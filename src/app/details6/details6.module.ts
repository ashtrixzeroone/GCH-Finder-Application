import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Details6PageRoutingModule } from './details6-routing.module';

import { Details6Page } from './details6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Details6PageRoutingModule
  ],
  declarations: [Details6Page]
})
export class Details6PageModule {}
