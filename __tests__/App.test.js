import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/client/App';
import ProcedureListComponent from '../src/client/containers/ProcedureListContainer';

let wrapped;

afterEach(() => {
  wrapped.unmount();
});

it('renders one <ProcedureListComponent /> component', () => {
  wrapped = shallow(<App />);
  expect(wrapped.find(ProcedureListComponent).length).toEqual(1);
});

it('renders an `.App`', () => {
  wrapped = shallow(<App />);
  expect(wrapped.find('.App').length).toEqual(1);
});

it('renders an `.App-header`', () => {
  wrapped = shallow(<App />);
  expect(wrapped.find('.App-header').length).toEqual(1);
});