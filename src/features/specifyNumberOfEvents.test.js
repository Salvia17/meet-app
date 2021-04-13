import { loadFeature, defineFeature } from 'jest-cucumber';
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppWrapper;
  let NumberOfEventsWrapper;
  test('When user hasn’t specified a number, 15 is the default number', ({ given, when, then }) => {
    given('the user hasn\'t specified the number of events', () => { });

    when('the app is loaded', () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = mount(<NumberOfEvents numberOfEvents={15} />);
    });

    then(/^the default number of events to load is (\d+)$/, (arg0) => {
      expect(NumberOfEventsWrapper.state("eventCount")).toBe(15);
    });
  });


  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('the app and events are loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user changes the default number of events to show', () => {
      const numberOfEvents = {
        target: { value: 5 },
      };
      AppWrapper.find(".numberOfEvents").simulate("change", numberOfEvents);
    });

    then('the number of events loaded should change to match the number user chose', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ eventCount: 5 });
      expect(NumberOfEventsWrapper.state("eventCount")).toBe(5);
    });
  });
});