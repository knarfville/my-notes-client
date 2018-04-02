import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Note } from './note';

const API_URL = environment.apiUrl;

@Injectable()
export class NoteService {

  constructor(private http: Http) {
  }

  public createNote(note: Note): Observable<Object> {
    return this.http
      .post(API_URL + '/create', note)
      .map(response => { 
        //TODO: should really check for the 'created' flag from the response body
        if(response.ok && response.status == 201)
          return response; 
        else
          return null;        
      })
      .catch(this.handleError);
  }
  
  public getAllNotes(): Observable<Note[]> {
    return this.http
      .get(API_URL + '/notes')
      .map(response => {
        const notes = response.json();
        return notes.map((note) => new Note(note));
      })
      .catch(this.handleError);
  }


  private handleError (error: Response | any) {
    console.error('NoteService::handleError', error);
    return Observable.throw(error);
  }
}
