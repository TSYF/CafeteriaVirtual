import { IonicStorageModule } from '@ionic/storage-angular'; //import necesario para usar storage

import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';

// ==========Firebase===========

// import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import * as firebase from 'firebase/app';
import 'firebase/auth';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({mode:'md'}),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(), // import de ionic storage
  ],
  providers: [
    ProductsService,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent],
})

export class AppModule {

    
}