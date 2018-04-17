import React, { Component } from 'react';

const Email = ({ from, dkim, spf }) => {
  return (
    <li className="email-list-item">
      <p>
        <strong>{from.name}</strong>
        dkim = {dkim ? 'pass' : 'fail'}
        spf = {spf ? 'pass' : 'fail'}
      </p>
      {/* <img
        className="ticks"
        src={
          dkim ? require('./assets/cross.png') : require('./assets/tick.png')
        }
        height="15rem"
      />
      <img
        className="ticks"
        src={spf ? require('./assets/cross.png') : require('./assets/tick.png')}
        height="15rem"
      /> */}
    </li>
  );
};

class Dmrac extends Component {
  state = {};

  componentDidMount() {}

  render() {
    console.log('trying to render Dmrac');
    const emails = this.props.data;
    if (emails) {
      console.log('emails', typeof emails);
      return (
        <div>
          <h2>Latest emails</h2>
          <div id="dmrac" className="first-line">
            <ul className="emails-list">
              {emails.map(email => <Email key={email.id} {...email} />)}
            </ul>
          </div>
        </div>
      );
    } else {
      return <h2>No data to show</h2>;
    }
  }
}

export default Dmrac;
