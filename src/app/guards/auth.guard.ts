import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';

export function authGuard(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const firebaseService = inject(FirebaseService);
    const utilsService = inject(UtilsService);
    
    
    let user = localStorage.getItem('user');

    return new Promise((resolve) => {
      
      firebaseService.getAuth().onAuthStateChanged((auth) => {

        if(auth){
          if(user) resolve(true);
        }
        else{
          utilsService.routerLink('/auth');
          resolve(false)
        }
      })
    });
}
