import React, { Component } from 'react';
import "./nprogress.css";
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 15,
    currentLocation: 'all',
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      const { eventCount } = this.state;
      if (this.mounted) {
        const filteredEvents = events.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          locations: extractLocations(events),
        });
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventNumber) => {
    const { currentLocation, eventCount } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === 'all'
            ? events
            : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          currentLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          currentLocation === 'all'
            ? events
            : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventNumber);
        this.setState({
          events: filteredEvents,
          eventCount: eventNumber,
        });
      });
    }
  };

  /* updateEvents = (location, eventCount) => {
     let locationEvents;
     getEvents().then((events) => {
       if (location === 'all') {
         locationEvents = events.slice(0, eventCount);
       } else {
         locationEvents = events.filter((event) => event.location === location)
           .slice(0, eventCount);
       }
       this.setState({
         events: locationEvents,
         eventCount
       });
     });
   }
 
   componentDidMount() {
     this.mounted = true;
     getEvents().then((events) => {
       if (this.mounted) {
         this.setState({
           events: events.slice(0, this.state.eventCount),
           locations: extractLocations(events)
         });
       }
     });
   }
 
   componentWillUnmount() {
     this.mounted = false;
   } */


  render() {
    const { eventCount } = this.state;
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} eventCount={eventCount} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
