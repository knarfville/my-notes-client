import { Component, OnInit, OnChanges } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { FormsModule, FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  
  noteForm: FormGroup;
  notes = [];
  message = new Map();
  
  constructor(private formBuilder: FormBuilder, private noteService: NoteService) { 
  }

  ngOnInit() {
    this.noteForm= this.formBuilder.group({
      titleControl: ['', [Validators.required, Validators.maxLength(255)]],
      contentControl: ['', [Validators.required, Validators.maxLength(1024)]],
    });
  }
  
  onCreateNote(){
    if(this.noteForm.get('titleControl').valid && this.noteForm.get('contentControl').valid){
      let newNote = new Note();
      newNote.title = this.noteForm.controls['titleControl'].value;
      newNote.content = this.noteForm.controls['contentControl'].value;
      
      this.noteService.createNote(newNote).subscribe(result => {
        console.log('result is . . . ');  
        console.log(result);  
        if(result != null){
          this.resetNoteForm();
          this.message.set('success', 'Note has been successfully created.');
        }else{
          this.message.set('failure', 'An error occurred while creating your note.');
        }
      });
      
    }else{
      this.message.set('failure', 'Note is not valid.');
    }
    this.onGetAllNotes();    
  }
  
  resetNoteForm(){
    this.noteForm.controls['titleControl'].setValue('');
    this.noteForm.controls['contentControl'].setValue('');
    this.message.clear();
  }
  
  onTitleKeypress(){
    this.message.clear();
  }
  
  onContentKeypress(){
    this.message.clear();
  }
  
  isFieldValid(field: string) {
    console.log('calling is isFieldValid . . .');
    console.log(this.noteForm)
    return this.noteForm.get(field).valid && this.noteForm.get(field).touched;
  }
    
  onGetAllNotes(){
    this.noteService.getAllNotes().subscribe(result => {
      this.notes = result;
    });
  }
  
}
