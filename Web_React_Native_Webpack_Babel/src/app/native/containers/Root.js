import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigator from '../router/Navigator';
import * as ImageUtils from '../../utils/ImageUtil';
import { SafeAreaView } from 'react-navigation';

export default class Root extends Component {
  render() {
    console.log('Inside Root view');
    console.log(this.props);
    return (
      <Provider store={this.props.store} >
      <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
        <Navigator/>
        </SafeAreaView>
      </Provider>
    );
  }
}



