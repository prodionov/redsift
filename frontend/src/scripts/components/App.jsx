/* eslint no-console: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Worldmap from './utils/worldMap';
import Counter from './utils/counter';
import Dmrac from './utils/dmrac';

import { translate } from 'react-i18next';

class App extends Component {
  static propTypes = {
    t: PropTypes.function,
  };

  render() {
    const { t } = this.props;
    let data = this.props.data['0'].value
      ? JSON.parse(this.props.data['0'].value)
      : null;
    console.log('type of data', typeof data);
    return (
      <div className="grandContainer">
        <h1>Welcome to the Dashboard</h1>
        <div className="flex-container">
          <Counter />
          <Dmrac data={data} />
        </div>
        <h2>Worl Map</h2>
        <Worldmap />
      </div>
    );
  }
}

export default translate(['app'], { wait: true })(App);
