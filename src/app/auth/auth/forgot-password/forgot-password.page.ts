import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
 
  form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
  })

  public constructor(
    private firebaseService: FirebaseService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
  }
  
  async submit(){
    if (this.form.valid) {
      
      const loading = await this.utilsService.loading();
      await loading.present();

      this.firebaseService.sendRecoveryEmail(this.form.value.email).then( res => {
        
        this.utilsService.presentToast({
          message: 'Correo enviado exitosamente',
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'mail-outline'
        });
        this.utilsService.routerLink('/auth');
        this.form.reset();

      }).catch(error => {
        console.log(error);
        this.utilsService.presentToast({
          message: this.firebaseService.errorMessages[error.message] ?? error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        });
      }).finally(() =>{
        loading.dismiss();
      })
    }
  }

 
}
