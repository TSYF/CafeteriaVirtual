import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardformPageRoutingModule } from './cardform-routing.module';

import { CardformPage } from './cardform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardformPageRoutingModule
  ],
  declarations: [CardformPage]
})
export class CardformPageModule {}
