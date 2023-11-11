import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { Storage } from '@ionic/storage-angular'; // import para crear metodos de storage


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})


export class AuthPage implements OnInit {
  
  public form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  })

  
  constructor(
    private storage: Storage,
    private firebaseService: FirebaseService,
    private utilsService: UtilsService
  ){}  //agregar Storage al constructor

  public async ngOnInit() { //convertir el inicializador en asincrono
    await this.storage.create();//Metodos de storage deben ser asincronos
  }  

  public async submit(){
    if (this.form.valid) {
      
      const loading = await this.utilsService.loading();
      await loading.present();

      this.firebaseService.signIn(this.form.value as User).then(res => {
        
        this.getUserInfo(res.user.uid);
        console.log(res);

      }).catch(error => {
        // console.log(error);
        this.utilsService.presentToast({
          message: this.firebaseService.errorMessages[error.message] ?? error.message,
          duration: 3500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(() =>{
        loading.dismiss();
      })
    }

  }

  private async getUserInfo(uid: string){
    if (this.form.valid) {
      
      const loading = await this.utilsService.loading();
      await loading.present();
      
      let path = `users/${uid}`;

      // const user = { name, email } = this.firebaseService.getDocument(path);
      
      this.firebaseService.getDocument(path).then((user: User) => {

        console.log(user);

        this.utilsService.saveInLocaleStorage('user', user);
        this.utilsService.routerLink('/pisos');
        this.form.reset();

        this.utilsService.presentToast({
          message: `Bienvenido ${user.name}`,
          duration: 1500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).catch(error => {
        console.log(error);
        this.utilsService.presentToast({
          message: this.firebaseService.errorMessages[error.message] ?? error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(() =>{
        loading.dismiss();
      })
    }
  }
}
