/**
 * Email3 Sift. Frontend view entry point.
 */
import { SiftView, registerSiftView } from '@redsift/sift-sdk-web';
import React from 'react';
import { render } from 'react-dom';

import { I18nextProvider } from 'react-i18next';
import i18n from './libs/i18n';

import App from './components/App';

export default class MyView extends SiftView {
  constructor() {
    // You have to call the super() method to initialize the SiftView base class.
    super();
  }

  presentView(/*value*/) {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>,
      document.querySelector('#root')
    );
  }
}

registerSiftView(new MyView(window));
