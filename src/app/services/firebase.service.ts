import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);

  // ========================= Autentificacion ============================
  // ====== Login ======
  signIn(user: User){
    return signInWithEmailAndPassword( getAuth(), user.email, user.password); 
  }
  // ====== Register ======
  signUp(user: User){
    return createUserWithEmailAndPassword( getAuth(), user.email, user.password); 
  }
  // ====== Update ======
  updateUser(displayName: string){
    return updateProfile( getAuth().currentUser, { displayName }); 
  }

}
