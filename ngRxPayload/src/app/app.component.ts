import { Component } from '@angular/core';
import { Person } from './models/Person';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  createPersonAction,
  deleteDataWithIdAction,
  updateDataWithIdAction,
} from './ngRx_work/2_actions/person.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: Array<Person> = [];

  details = {
    id: 0,
    name: '',
  };

  constructor(private storeObj: Store<{ allPersons: any }>) {
    this.storeObj.select('allPersons').subscribe((data) => (this.data = data));
  }

  addDataFun() {
    obj: new Person(this.details.id, this.details.name);
    this.storeObj.dispatch(
      createPersonAction({
        personDetails: new Person(this.details.id, this.details.name),
      })
    );
  }

  readDataWithIdFun() {
    let res: Array<Person> = [];
    this.storeObj.select('allPersons').subscribe(
      (data) => {
        res = data;
      },
      (err) => {
        console.log(err);
      }
    );

    for (let p of res) {
      if (p.personId == this.details.id) {
        console.log(p);
        return;
      }
    }

    console.log('no person present with id : ' + this.details.id);
  }

  updateDataWithIdFun() {
    this.storeObj.dispatch(
      updateDataWithIdAction({
        id: this.details.id,
        name: this.details.name,
      })
    );
  }

  deleteDataWithIdFun() {
    this.storeObj.dispatch(deleteDataWithIdAction({ id: this.details.id }));
  }
}
