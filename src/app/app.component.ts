import { Component } from '@angular/core';
import { SharedService } from './Services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apptareas';


  constructor(private services:SharedService){}

  notes:any=[];

  listNotes(){
    this.services.getNotes().subscribe((res) => {
      this.notes = res;
    })
  }

  ngOninit(){
    this.listNotes();
  }

  addNotes(newNote:string){
    this.services.addNotes(newNote).then((res) => {
      console.log(res);
      this.listNotes();
    })
  }

  deleteNote(id:string){
    this.services.deleteNotes(id).then((res) => {
      console.log(res);
      this.listNotes();
    })
  }


}
