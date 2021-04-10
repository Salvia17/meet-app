import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventsDefault: 32
  }

  handleEventInputChanged = (event) => {
    const eventsDefault = event.target.value;
    this.setState({
      eventsDefault,
    });
  };


  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="numberInput"
          placeholder="Enter Number of Events"
          value={this.state.eventsDefault}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;