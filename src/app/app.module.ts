import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { NoteService } from './note.service';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule    
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
