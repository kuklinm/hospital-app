import roomsReducer from '../../../src/client/reducers/rooms';
import {FETCH_ROOMS_SUCCESS, FETCH_ROOMS_ERROR} from '../../../src/client/actions/actionTypes';

const mockedRoomData = [
  {
    id: 1,
    name: 'TestROOM',
  },
  {
    id: 2,
    name: 'TestROOM2',
  },
];

const mockedError = new Error();

const initialState = {
  list: [],
  error: null,
  loading: true
};

it('handles actions of type FETCH_ROOMS_SUCCESS', () => {
  const action = {
    type: FETCH_ROOMS_SUCCESS,
    payload: [mockedRoomData]
  };

  const newState = roomsReducer(initialState, action);

  expect(newState).toEqual({ list: [mockedRoomData], error: null, loading: false });
});


it('handles actions of type FETCH_ROOMS_ERROR', () => {
  const action = {
    type: FETCH_ROOMS_ERROR,
    payload: mockedError
  };

  const newState = roomsReducer(initialState, action);

  expect(newState).toEqual({ ...initialState, error: mockedError, loading: false});
});
