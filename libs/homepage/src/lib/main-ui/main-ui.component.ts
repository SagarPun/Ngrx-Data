import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonService } from '../../data/person.service';
import { Person } from '../../model/person';

@Component({
  selector: 'sagar-tutorial-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.scss']
})
export class MainUiComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'gender', 'company', 'address', 'update'];
  people$: Observable<Person[]>;
  selected = "Here"

  person: Person = {
    id: '',
    isActive: false,
    age: 0,
    eyeColor: '',
    name: '',
    gender: '',
    company: '',
    email: '',
    address: '',
    about: ''
  };

  constructor(private personService: PersonService) {
    this.people$ = this.personService.entities$;
  }

  ngOnInit(): void {
    this.getPeople()
  }

  getPeople() {
    this.personService.getAll()
  }

  submit() {
    this.personService.add(this.person)
    console.log(this.person)
    this.person = {
      id: '',
      isActive: false,
      age: 0,
      eyeColor: '',
      name: '',
      gender: '',
      company: '',
      email: '',
      address: '',
      about: ''
    };
  }

  delete(person: any) {
    this.personService.delete(person.id)
  }

}