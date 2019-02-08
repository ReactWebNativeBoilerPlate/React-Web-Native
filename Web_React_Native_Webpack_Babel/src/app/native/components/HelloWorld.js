import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default class HelloWorld extends Component {
  render() {
  
    const { onPress, color } = this.props;
    const style = StyleSheet.create({
      helloWorld: {
        color: color,
        textAlign: 'center',
      }
    });
    return (
      <View>
        <Text onPress={onPress} style={style.helloWorld}>Changed the component</Text>
      </View>
    );
  }
}

HelloWorld.propTypes = {
  onPress : PropTypes.func,
  color : PropTypes.string,
}
