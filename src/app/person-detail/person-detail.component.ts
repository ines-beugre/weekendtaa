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


  @Input() person: Person;
  message: string;
  
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

  updatePerson(): void {
    this.personService.updatePerson(this.person)
      .subscribe(person => {
        if(person.id > 0) {
          this.goBack();
        }
      })
  }

  deletePerson(): void{
    this.personService.deletePerson(this.person.id)
      // .subscribe(person => this.person = person)
      .subscribe(()=> this.message = "Customer Deleted Successfully!");
    console.log("personDelete");
    this.goBack();
  }

  goBack(){
    this.personService.goBack();
  }
}
