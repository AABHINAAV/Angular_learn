import { createAction, props } from '@ngrx/store';
import {
  CREATE_PERSON,
  DELETE_PERSON,
  READ_PERSON,
  UPDATE_PERSON,
} from '../1_action_types/person.action.types';
import { Person } from 'src/app/models/Person';

export const createPersonAction = createAction(
  CREATE_PERSON,
  props<{ personDetails: Person }>()
);

// export const readPersonWithIdAction = createAction(
//   READ_PERSON,
//   props<{ personId: number }>()
// );

export const updateDataWithIdAction = createAction(
  UPDATE_PERSON,
  props<{ id: number; name: string }>()
);

export const deleteDataWithIdAction = createAction(
  DELETE_PERSON,
  props<{ id: number }>()
);
