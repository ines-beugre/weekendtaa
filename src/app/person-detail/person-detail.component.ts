import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../services/person-services/person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {


  @Input() person: Person
  
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
  ) { }

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id)
      .subscribe(person => this.person = person);
  }

  goBack(){
    this.personService.goBack();
  }
}
