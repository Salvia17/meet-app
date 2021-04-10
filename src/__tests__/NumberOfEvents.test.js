import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
  });

  test('default number of events is 32', () => {
    expect(NumberOfEventsWrapper.state('eventsDefault')).toBe(32);
  });

  test('check placeholder to be Enter number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberInput').at(0).props().placeholder
    ).toEqual('Enter Number of Events');
  });

  test('check on change state', () => {
    const eventsDefault = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.numberInput').simulate('change', eventsDefault);
    expect(NumberOfEventsWrapper.state('eventsDefault')).toBe(10);
  });

  test('check type is equal to number', () => {
    expect(NumberOfEventsWrapper.find('.numberInput').at(0).props().type).toEqual('number');
  });
})