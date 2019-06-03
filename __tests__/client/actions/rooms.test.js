import configureStore from 'redux-mock-store';
import * as roomsActions from '../../../src/client/actions/rooms';
import {FETCH_ROOMS_SUCCESS, FETCH_ROOMS_ERROR} from '../../../src/client/actions/actionTypes';

const mockStore = configureStore();
const store = mockStore();

const mockedRoomsData = [
  {
    id: 1,
    name: 'test',
  },
  {
    id: 2,
    name: 'test2',
  },
];


beforeEach(() => {
  store.clearActions();
});

describe('fetchRoomsSuccess', () => {
  it('has the correct type', () => {
    const action = roomsActions.fetchRoomsSuccess();
    expect(action.type).toEqual(FETCH_ROOMS_SUCCESS);
  });

  it('has the correct payload', () => {
    const mockData = [mockedRoomsData];
    const action = roomsActions.fetchRoomsSuccess(mockData);
    expect(action.payload).toEqual(mockData);
  });
});

describe('fetchRoomsError', () => {
  it('has the correct type', () => {
    const action = roomsActions.fetchRoomsError();
    expect(action.type).toEqual(FETCH_ROOMS_ERROR);
  });
});
