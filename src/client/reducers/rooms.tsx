import * as types from '../actions/actionTypes';
import {RoomAction} from '../actions/rooms';
import Room from '../models/Room';

interface RoomState {
  list: Room[],
  error: any,
  loading: boolean
}

const initialState: RoomState = {
  list: [],
  error: null,
  loading: true
};

const roomsReducer = (state = initialState, action: RoomAction): RoomState => {
  switch (action.type) {
    case types.FETCH_ROOMS_SUCCESS:
      return {...state, list: action.payload, error: null, loading: false};
    case types.FETCH_ROOMS_ERROR:
      return {...state, error: action.payload, loading: false};
    default:
      return {...state};
  }
};

export default roomsReducer;