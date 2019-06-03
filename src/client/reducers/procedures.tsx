import * as types from '../actions/actionTypes';
import {ProcedureAction} from '../actions/procedures'
import Procedure from "../models/Procedure";

interface RoomState {
  list: Procedure[],
  error: any,
  loading: boolean
}

const initialState: RoomState = {
  list: [],
  error: null,
  loading: true
};

const proceduresReducer = (state = initialState, action: ProcedureAction): RoomState => {
  switch (action.type) {
    case types.FETCH_PROCEDURES_SUCCESS:
      return {...state, list: action.payload, error: null, loading: false};
    case types.FETCH_PROCEDURES_ERROR:
      return {...state, error: action.payload, loading: false};
    case types.ADD_PROCEDURE_SUCCESS:
      return {...state, list: [...state.list, action.payload], error: null};
    case types.ADD_PROCEDURE_ERROR:
      return {...state, error: action.payload};
    default:
      return {...state};
  }
};

export default proceduresReducer;