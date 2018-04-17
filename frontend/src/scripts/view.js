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
    this.controller.subscribe('outputs', this.onOutputs.bind(this));
  }

  onOutputs(data) {
    let results = data.map(d => {
      return JSON.parse(d.value);
    });
    return results;
  }

  presentView(value) {
    console.log('presentView typeof value', typeof value);
    render(
      <I18nextProvider i18n={i18n}>
        <App data={value.data} />
      </I18nextProvider>,
      document.querySelector('#root')
    );
  }
}

registerSiftView(new MyView(window));
