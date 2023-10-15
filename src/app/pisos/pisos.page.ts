import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-pisos',
  templateUrl: './pisos.page.html',
  styleUrls: ['./pisos.page.scss'],
})
export class PisosPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }
  signOut(){
    this.firebaseSvc.signOut();
  }

}
