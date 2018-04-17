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
    console.log('i should render a new things');
    console.log('this.props', this.props.data[0].value);
    return (
      <h1>what is going on?</h1>
      // <div className="grandContainer">
      //   <h1>Welcome to the Dashboard</h1>
      //   <div className="flex-container">
      //     <Counter />
      //     <Dmrac />
      //   </div>
      //   <h2>Worl Map</h2>
      //   <Worldmap />
      // </div>
    );
  }
}

export default translate(['app'], { wait: true })(App);
