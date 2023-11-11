import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';


export function NoAuthGuard (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Promise<boolean | UrlTree> {
    const firebaseSvc = inject(FirebaseService);
    const utilsService = inject(UtilsService);

    return new Promise((resolve) => {
      firebaseSvc.getAuth().onAuthStateChanged((auth) => {

        if(!auth) resolve(true);
        else{
          utilsService.routerLink('/pisos');
          resolve(false);
        }
      })
    });
}