import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
// import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-pisos',
  templateUrl: './pisos.page.html',
  styleUrls: ['./pisos.page.scss'],
})
export class PisosPage implements OnInit {

  public constructor(
    private firebaseService: FirebaseService,
    // private utilsService: UtilsService
  ) {}
  
  ngOnInit() {
  }
  signOut(){
    this.firebaseService.signOut();
  }

}
