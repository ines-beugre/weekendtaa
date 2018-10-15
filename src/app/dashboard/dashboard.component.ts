import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../services/person-services/person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons()
  }

  getPersons(){
    this.personService.getPersons()
        .subscribe(persons => this.persons = persons.slice(1,5));
  }
}
