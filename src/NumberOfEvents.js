import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventCount: 15
  }

  handleEventInputChanged = (event) => {
    const value = event.target.value
    this.setState({
      eventCount: value,
    });
    this.props.updateEvents(null, value)
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
      </div>
    );
  }
}

export default NumberOfEvents;