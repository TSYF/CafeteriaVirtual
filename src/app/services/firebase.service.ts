import { Injectable, inject } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail} from 'firebase/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilSvc = inject(UtilsService);

  // ========================= Autentificacion ============================

  getAuth(){
    return getAuth();
  }

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
  // ====== Recovery Email ======
  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail( getAuth(), email); 
  }
  // ====== Sign Out ======
  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilSvc.routerLink('/auth');
  }



  // ========================= Base de Datos =========================
  
  // ======= Set a Documnent =========
  setDocument(path: string, data: any){
    return setDoc( doc( getFirestore(), path), data);
  }
  // ======= Get a Documnent =========
  async getDocument(path: string){
    return (await getDoc( doc( getFirestore(), path))).data();
  }

}
