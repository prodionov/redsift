import React, { Component } from 'react';

const Email = ({ from, dkim, spf }) => {
  return (
    <li className="email-list-item">
      <p>
        <strong>{from.name}</strong>
        dkim = {dkim ? 'pass' : 'fail'}
        spf = {spf ? 'pass' : 'fail'}
      </p>
    </li>
  );
};

class Dmrac extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const emails = this.props.data;
    if (emails) {
      console.log('emails', typeof emails);
      return (
        <div>
          <h2>Latest emails</h2>
          <div id="dmrac" className="first-line">
            <table>
              <tr>
                <th>From</th>
                <th>Dkim</th>
                <th>Spf</th>
              </tr>
              <tbody />
            </table>
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
