import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../services/person-services/person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit {

  persons: Person[];
  person: Person; //correspond à selectedPerson

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }
 
  getPersons(): void {
    this.personService.getPersons()
        .subscribe(persons => this.persons = persons);
  }

}