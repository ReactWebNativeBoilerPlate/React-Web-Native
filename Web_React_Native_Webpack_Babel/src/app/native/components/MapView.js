import React, { Component } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import Toolbar from "./Toolbar";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar
          headerText="Map"
          isBackEnabled={true}
          navigation={this.props.navigation}
        />
        <MapView
          style={{ flex: 1, position: "relative" }}
          region={{
            latitude: 42.882004,
            longitude: 74.582748,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        />
      </View>
    );
  }
}
