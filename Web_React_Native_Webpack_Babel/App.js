/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//test

import React, { Component } from 'react';
import { View } from 'react-native';
import Root from './src/app/native/containers/Root';
import configureStore from './src/app/store/configureStore.prod.js';
import {strings} from './LStrings';

const store = configureStore();

export default class App extends Component {
  render() {

  console.log(`strings = ${strings}`);
    return (<Root store={store}/>
    );
  }
}

