import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

import Router from './Routes';

import createStore from './redux/create';
import Api from './helpers/api.helper';

console.disableYellowBox = true;

const store = createStore(new Api());

export default class App extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Router />
      </Provider>
    );
  }
}
