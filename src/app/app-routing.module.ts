import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'cardform',
    loadChildren: () => import('./cardform/cardform.module').then( m => m.CardformPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'pisos',
    loadChildren: () => import('./pisos/pisos.module').then( m => m.PisosPageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./auth/main/profile/profile.module').then( m => m.ProfilePageModule)
  },



];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
