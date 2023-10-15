import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    CustomInputComponent,
    LogoComponent
  ],
  exports:  [
    CustomInputComponent, //exporta al que lo necesite usar
    ReactiveFormsModule,  //para usar formularios en las páginas
    LogoComponent
  ],
  imports: [
    CommonModule,
    IonicModule, //para utiliza componentes ionic
    ReactiveFormsModule, //para usar formularios
    FormsModule
  ]
})
export class SharedModule { }
