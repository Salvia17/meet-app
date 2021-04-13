import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import Event from "../Event";
import EventList from '../EventList';
import { mockData } from "../mock-data";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let EventWrapper;
  let AppWrapper;
  let EventListWrapper;

  test('An event element is collapsed by default', ({ given, and, when, then }) => {

    given('an app is open', () => {
      AppWrapper = mount(<App />);
    });

    and('list event element has been loaded', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user hasn\'t clicked on details button yet', () => {
      expect(EventWrapper.state("showHideDetails")).toBe(false);
    });

    then('an event element is collapsed by default', () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {

    given('an app is open', () => {
      AppWrapper = mount(<App />);
    });

    and('list event element has been loaded', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user clicks on details button', () => {
      EventWrapper.find('.details-btn').simulate('click');
    });

    then('an event element will expand to show its details', () => {
      expect(EventWrapper.state("showHideDetails")).toBe(true);
      expect(EventWrapper.find(".event-details")).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {

    given('an app is open', () => {
      AppWrapper = mount(<App />);
    });

    and('event element has been expanded', () => {
      expect(EventWrapper.state("showHideDetails")).toBe(true);
      expect(EventWrapper.find(".event-details")).toHaveLength(1);
    });

    when('the user clicks on hide details button', () => {
      EventWrapper.find('.details-btn').simulate('click');
    });

    then('an event element will collapse to hide its details', () => {
      expect(EventWrapper.state("showHideDetails")).toBe(false);
      expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
  });
});