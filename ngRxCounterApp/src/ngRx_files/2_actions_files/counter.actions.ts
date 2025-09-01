import { createAction } from '@ngrx/store';
import {
  DECREMENT_COUNT,
  INCREMENT_COUNT,
  RESET_COUNT,
} from '../1_actions_list/counter.types.actions';

export const incrementCountAction = createAction(INCREMENT_COUNT);
export const decrementCountAction = createAction(DECREMENT_COUNT);
export const resetCountAction = createAction(RESET_COUNT);
