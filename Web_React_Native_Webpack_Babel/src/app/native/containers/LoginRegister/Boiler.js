import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import {strings} from '../../../../../LStrings';
//import { StackNavigator } from "react-navigation";
export default class Boiler extends Component {
  componentDidMount() {
    strings.setLanguage("hi");
    this.setState({});
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    headerLeft: null
  };
  render() {
    return <Text>{strings.hi}</Text>;
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("Boiler", () => Boiler);
