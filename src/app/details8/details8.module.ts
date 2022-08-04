import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Details8PageRoutingModule } from './details8-routing.module';

import { Details8Page } from './details8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Details8PageRoutingModule
  ],
  declarations: [Details8Page]
})
export class Details8PageModule {}
