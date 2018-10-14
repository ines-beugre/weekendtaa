import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PERSONS } from '../mock-persons';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent implements OnInit {

  // person: Person = {
  //   id: 1,
  //   firstname: 'Inès',
  //   lastname: 'Beugré',
  //   email: 'ines_beugre@yahoo.fr'
  // }

  persons = PERSONS;
  person: Person;

  constructor() { }

  onSelect(person: Person): void {
    this.person = person;
  }
 
  ngOnInit() {
  }

}
