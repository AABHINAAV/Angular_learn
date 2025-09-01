import { createReducer, on } from '@ngrx/store';
import { Person } from 'src/app/models/Person';
import {
  createPersonAction,
  deleteDataWithIdAction,
  updateDataWithIdAction,
} from '../2_actions/person.actions';

export const initialState: Array<Person> = [new Person(1, 'name1')];

export const personReducer = createReducer(
  initialState,
  on(createPersonAction, (state, { personDetails }) => [
    ...state,
    personDetails,
  ]),
  on(updateDataWithIdAction, (state, { id, name }) => [
    ...state.filter((person) => person.personId != id),
    new Person(id, name),
  ]),
  on(deleteDataWithIdAction, (state, { id }) => [
    ...state.filter((person) => person.personId != id),
  ])
);
