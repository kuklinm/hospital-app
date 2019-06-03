import * as types from '../actions/actionTypes';
import {DoctorAction} from '../actions/doctors';
import Doctor from "../models/Doctor";

interface DoctorsState {
  data: Doctor[],
  error: any,
  loading: boolean
}

const initialState: DoctorsState = {
  data: [],
  error: null,
  loading: true
};

const doctorsReducer = (state = initialState, action: DoctorAction): DoctorsState => {
  switch (action.type) {
    case types.FETCH_DOCTORS_SUCCESS:
      return {...state, data: action.payload, error: null, loading: false};
    case types.FETCH_DOCTORS_ERROR:
      return {...state, error: action.payload, loading: false};
    default:
      return {...state};
  }
};

export default doctorsReducer;