import { createReducer, on } from '@ngrx/store';
import {
  decrementCountAction,
  incrementCountAction,
  resetCountAction,
} from '../2_actions_files/counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(incrementCountAction, (state) => state + 1),
  on(decrementCountAction, (state) => state - 1),
  on(resetCountAction, (state) => 0)
);
