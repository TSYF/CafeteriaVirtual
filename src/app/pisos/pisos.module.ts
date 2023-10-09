import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PisosPageRoutingModule } from './pisos-routing.module';

import { PisosPage } from './pisos.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PisosPageRoutingModule,
    SharedModule
  ],
  declarations: [PisosPage]
})
export class PisosPageModule {}
