import { combineReducers } from 'redux';

import procedures from './procedures';
import doctors from './doctors';
import rooms from './rooms';
import patients from './patients';

const rootReducer = combineReducers({
  procedures,
  doctors,
  rooms,
  patients
});

export default rootReducer;