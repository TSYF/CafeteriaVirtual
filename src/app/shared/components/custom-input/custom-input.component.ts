import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent  implements OnInit {
  
  @Input() control!: FormControl; //
  @Input() type!: String;  //Tipo de input a utilizar
  @Input() label!: String;  //En que input se escribe
  @Input() autocomplete!: String;  //posibilidad de autocompletar
  @Input() icon!: String;  //icono indicativo 

  isPassword!: boolean;
  hide: boolean = true;

  constructor() { }

  ngOnInit() {
    //Condición para solo tomar el tipo requerido
    if(this.type == 'password') this.isPassword = true;
  }

  // func para transformar los tipos de input
  showOrHidePassword(){
    this.hide = !this.hide;
    if(this.hide) this.type = 'password';
    else this.type = 'text';
  }

}
