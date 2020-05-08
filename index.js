/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import {name as appName} from './app.json';


const defaultStage = {value: 0};

const reducer = (state = defaultStage, action) => {
  if (state.type === 'UP') {
    return { value: state.value + 1 };
  }
  if (state.type === 'DOWN') {
    return { value: state.value - 1 };
  }

  return state;
};

const store = createStore(reducer);

class DemoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => DemoApp);
