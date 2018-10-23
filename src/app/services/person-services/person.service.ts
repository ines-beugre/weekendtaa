import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Person } from '../../person';
import { MessageService} from '../message-services/message.service';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private messageService: MessageService,
    private location: Location,
    private http: HttpClient,
  ) { }

  /** Log a PersonService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PersonService: ${message}`);
  }
  
  private personsUrl = 'persons/';

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl);
  }

  /** GET hero by id. Will 404 if id not found */
  getPerson(id: number): Observable<Person>{
    const url = `${this.personsUrl}/${id}`;
    return this.http.get<Person>(url)
  }

  addPerson(person: Person): Observable<Person>{
    const url = `${this.personsUrl}create`;
    console.log("Création en base de données d'une personne", url, person);
    return this.http.post(url, person) as Observable<Person>;
  }

  /** PUT: update the hero on the server */
  updatePerson (person: Person): Observable<any> {
    const url = `${this.personsUrl}update`;
    // const url ='localhost:8080/persons/update'
    console.log("urlUpdate", `${this.personsUrl}update `)
    return this.http.put<Person>(url, person)
  }
  
  deletePerson (person: Person | number): Observable<Person>{
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.personsUrl}delete/${id}`;

    console.log("urlDelete", url);
    return this.http.delete<Person>(url);
  }
  
  goBack(){
    this.location.back();
  }

}
