import React, { Component } from 'react';
import "./nprogress.css";
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import { WarningAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 15,
    currentLocation: 'all',
  }

  componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine) {
      this.setState({
        warningText:
          'You are currently offline, so data may not be up to date',
      });
    } else {
      this.setState({
        warningText: '',
      });
    }
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    const { eventCount, events } = this.state;
    return (
      <div className="App">
        <WarningAlert text={this.state.warningText} />
        <h1>Meet App</h1>
        <h4>Choose a city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} eventCount={eventCount} />
        <h4>Events in each city</h4>
        <div className='data-vis-wrapper'>
          <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
