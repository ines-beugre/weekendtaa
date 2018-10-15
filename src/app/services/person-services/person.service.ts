import { Injectable } from '@angular/core';
import { Person } from '../../person';
import { PERSONS } from '../../mock-persons';
import { Observable, of } from 'rxjs';
import { MessageService} from '../message-services/message.service';

//of(HEROES) returns an Observable<Hero[]> that emits  a single value, the array of mock heroes.

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private messageService: MessageService) { }

  // getPersons(): Observable<Person[]> {
  //   return of (PERSONS);
  // }

  getPersons(): Observable<Person[]> {
    this.messageService.add('PersonService: fecthed persons');
    return of (PERSONS);
  }

}
