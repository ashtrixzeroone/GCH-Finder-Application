import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Details7PageRoutingModule } from './details7-routing.module';

import { Details7Page } from './details7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Details7PageRoutingModule
  ],
  declarations: [Details7Page]
})
export class Details7PageModule {}
