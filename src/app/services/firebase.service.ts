import { Injectable } from '@angular/core';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, signOut} from 'firebase/auth'
// import { AngularFireAuth} from '@angular/fire/compat/auth';
import { UserCredential, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, /* signOut, */ Auth } from "firebase/auth"
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { UtilsService } from './utils.service';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
// import { UserCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public errorMessages = {
        "auth/missing-password": "Falta Contraseña",
        "auth/invalid-email": "Email Inválido",
        "auth/user-not-found": "Usuario no Existe",
        "auth/wrong-password": "Contraseña Incorrecta",
        "auth/email-already-in-use": "Email ya está en uso",
        "auth/operation-not-allowed": "Operación no Permitida",
        "auth/weak-password": "Contraseña Débil"
    }

  public constructor(
    // private auth: AngularFireAuth,
    // private firestore: AngularFirestore,
    private utilService: UtilsService
  ) {}
  
  // ========================= Autentificacion ============================
  
  public getAuth(): Auth {
    return getAuth();
  }

  // ====== Login ======
  public signIn(user: User): Promise<UserCredential> {
    return signInWithEmailAndPassword( getAuth(), user.email, user.password); 
  }
  // ====== Register ======
  public signUp(user: User): Promise<UserCredential> {
    return createUserWithEmailAndPassword( getAuth(), user.email, user.password); 
  }
  // ====== Update ======
  public updateUser(displayName: string): Promise<void> {
    return updateProfile( getAuth().currentUser, { displayName }); 
  }
  // ====== Recovery Email ======
  public sendRecoveryEmail(email: string): Promise<void> {
    return sendPasswordResetEmail( getAuth(), email); 
  }
  // ====== Sign Out ======
  public signOut(): void {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilService.routerLink('/auth');
  }



  // ========================= Base de Datos =========================
  
  // ======= Set a Documnent =========
  setDocument(path: string, data: any){
    return setDoc( doc( getFirestore(), path), data);
  }
  // ======= Get a Documnent =========
  async getDocument(path: string){
    return (await getDoc(doc( getFirestore(), path))).data();
  }

}
