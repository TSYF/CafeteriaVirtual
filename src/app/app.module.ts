import { IonicStorageModule } from '@ionic/storage-angular'; //import necesario para usar storage

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './services/products.service';

// ==========Firebase===========
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({mode:'md'}),
    AppRoutingModule,
    FormsModule,
    IonicStorageModule.forRoot(), // import de ionic storage
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    ProductsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
