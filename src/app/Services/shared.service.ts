import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore) { }

  getNotes(){
    let notesCollection = collection(this.fs, 'task');
    return collectionData(notesCollection, {idField: 'id'})
  }

  addNotes(desc:string){
    let data = {description:desc};
    let notesCollection = collection(this.fs, 'task');
    return addDoc(notesCollection, data);
  }

  deleteNotes(id:string){
    let docRef = doc(this.fs, 'task/' + id)
    return deleteDoc(docRef);
  }

  
}
