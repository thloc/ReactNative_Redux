/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import {name as appName} from './app.json';


const defaultStage = {value: 0, highlight: false};

const reducer = (state = defaultStage, action) => {
  if (action.type === 'UP') {
    return { value: state.value + 1, highlight: state.highlight };
  }
  if (action.type === 'DOWN') {
    return { value: state.value - 1, highlight: state.highlight };
  }

  if (action.type === 'CHANGE_COLOR') {
    return { value: state.value, highlight: !state.highlight };
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
