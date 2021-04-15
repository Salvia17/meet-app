import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventCount: 15
  }

  handleEventInputChanged = (event) => {
    const eventCount = event.target.value;
    if (eventCount < 1) {
      return this.setState({
        eventCount: '',
        errorText: 'Select a number between 1 and 15',
      });
    } else if (eventCount > 15) {
      return this.setState({
        eventCount: '',
        errorText: 'Select a number between 1 and 15',
      })
    } else {
      this.setState({
        eventCount,
        errorText: '',
      })
    }
    this.props.updateEvents('', eventCount);
  };


  render() {
    return (
      <div className="numberOfEvents">
        <p>Number of Events</p>
        <input
          type="number"
          className="numberInput"
          placeholder="Enter Number of Events"
          value={this.state.eventCount}
          onChange={this.handleEventInputChanged}
        />
        <ErrorAlert type='text' text={this.state.errorText} />
      </div>

    );
  }
}

export default NumberOfEvents;