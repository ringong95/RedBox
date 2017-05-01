import React, { Component, StatusBar, View } from 'react';
import { Provider, } from 'react-redux';
import Navigation from './navigation/NavigationLayout.ios';
import Store from './redux/store';

export default class RedBox extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}
