import { Injectable } from '@angular/core';
import { Person } from '../../person';
import { PERSONS } from '../../mock-persons';
import { Observable, of } from 'rxjs';
import { Location } from '@angular/common';
import { MessageService} from '../message-services/message.service';

//of(HEROES) returns an Observable<Hero[]> that emits  a single value, the array of mock heroes.

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private messageService: MessageService,
    private location: Location
  ) { }

  getPersons(): Observable<Person[]> {
    this.messageService.add(`PersonService: fetched persons`);
    return of(PERSONS);
  }

  getPerson(id: number): Observable<Person>{
    this.messageService.add(`PersonService: fetched persons id = ${id}`);
    return of(PERSONS.find(person => person.id === id))
  }

  goBack(){
    this.location.back();
  }
}
