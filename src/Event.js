import React, { Component } from 'react';
import moment from 'moment';

class Event extends Component {
  state = {
    showHideDetails: false,
  };

  handleShowHideButton = () => {
    if (this.state.showHideDetails === true) {
      this.setState({ showHideDetails: false });
    } else {
      this.setState({ showHideDetails: true });
    }
  };

  renderTime = () => {
    const time = this.props.event.start.dateTime
    const formattedTime = moment(time, 'YYYY-MM-DD HH:mm').toDate()
    return <span className='start-dateTime'>{`${formattedTime}`}</span>
  }

  render() {
    const { event } = this.props;
    return (
      <div className='event'>
        <h1>{event.summary}</h1>
        <p>{this.renderTime()}</p>
        <p className='locations'>{event.location}</p>

        {this.state.showHideDetails && (
          <div className='event-details'>
            <h2>About event:</h2>
            <a href={event.htmlLink}
              target='_blank'
              rel='noreferrer'>
              <button className="google-btn">See Details on Google Calendar</button>
            </a>
            <p className='description'>{event.description}</p>
          </div>
        )}

        <button
          className='details-btn'
          onClick={() => this.handleShowHideButton()}
        >
          {!this.state.showHideDetails ? 'Show details' : 'Hide details'}
        </button>
      </div>
    )
  }
}

export default Event;