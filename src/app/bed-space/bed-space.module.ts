import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BedSpacePageRoutingModule } from './bed-space-routing.module';

import { BedSpacePage } from './bed-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BedSpacePageRoutingModule
  ],
  declarations: [BedSpacePage]
})
export class BedSpacePageModule {}
