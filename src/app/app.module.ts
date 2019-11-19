import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HOMEComponent } from './home/home.component';

import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { APP_BASE_HREF } from '@angular/common';
import { CREATEComponent } from './create/create.component';
import { UPDATEComponent } from './update/update.component';



const firebaseAuth  = {
  apiKey: "AIzaSyBS8gIOtlo0HgIdtvT9dFF4s_jpbkJ8ino",
  authDomain: "trabmotanha.firebaseapp.com",
  databaseURL: "https://trabmotanha.firebaseio.com",
  projectId: "trabmotanha",
  storageBucket: "trabmotanha.appspot.com",
  messagingSenderId: "611786546158"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HOMEComponent,
    CREATEComponent,
    UPDATEComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    FormsModule,
  
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
