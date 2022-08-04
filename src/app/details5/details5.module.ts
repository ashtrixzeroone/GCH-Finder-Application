import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Details5PageRoutingModule } from './details5-routing.module';

import { Details5Page } from './details5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Details5PageRoutingModule
  ],
  declarations: [Details5Page]
})
export class Details5PageModule {}
