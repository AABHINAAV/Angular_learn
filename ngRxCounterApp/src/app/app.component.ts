import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  decrementCountAction,
  incrementCountAction,
  resetCountAction,
} from 'src/ngRx_files/2_actions_files/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count: Observable<number>;

  constructor(private StoreObj: Store<{ counter: number }>) {
    this.count = this.StoreObj.select('counter');
  }

  incrementCountFunc() {
    this.StoreObj.dispatch(incrementCountAction());
  }

  decrementCountFunc() {
    this.StoreObj.dispatch(decrementCountAction());
  }

  resetCountFunc() {
    this.StoreObj.dispatch(resetCountAction());
  }
}
