import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisosPageRoutingModule } from './pisos-routing.module';

import { PisosPage } from './pisos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisosPageRoutingModule
  ],
  declarations: [PisosPage]
})
export class PisosPageModule {}
