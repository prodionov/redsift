/* eslint no-console: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

class App extends Component {
  static propTypes = {
    t: PropTypes.function,
  };

  render() {
    const { t } = this.props;
    console.log('this.props', this.props.data);
    return <h1>{t('app-name')}</h1>;
  }
}

export default translate(['app'], { wait: true })(App);
