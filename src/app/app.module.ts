import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDiursMb8M530EbBr4Bltk857QJJoNoxno",
  authDomain: "app-tareas-2e918.firebaseapp.com",
  projectId: "app-tareas-2e918",
  storageBucket: "app-tareas-2e918.appspot.com",
  messagingSenderId: "826082235972",
  appId: "1:826082235972:web:d6a0fe03a9a386e83b8e11"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp( firebaseConfig )),
    provideFirestore(() => getFirestore()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
