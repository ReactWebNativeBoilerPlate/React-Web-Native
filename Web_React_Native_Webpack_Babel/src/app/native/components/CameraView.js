import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import launchCamera from "../../utils/CameraPickerUtil";
import appStyles from '../styles/styles'
import Toolbar from "./Toolbar";

export default class FilePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: ""
    };
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <Toolbar
          headerText="Camera"
          isBackEnabled={true}
          navigation={this.props.navigation}
        />
        <Image style={styles.imageStyle} source={this.state.avatarSource} />

        <TouchableOpacity
          style={appStyles.buttonStyle}
          onPress={() =>
            launchCamera(this.onResult, this.onCancel, this.OnError)
          }
        >
          <Text style={appStyles.buttonTextStyle}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onResult = source => {
    this.setState({ avatarSource: source });
  };

  onCancel() {
    //handle as per requirement
  }

  OnError(error) {
    //handle as per requirement
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },

  buttonStyle: {
    width: "40%",
    backgroundColor: "blue",
    padding: 8,
    marginTop: 40,
    alignItems: "center"
  },

  buttonTextStyle: {
    fontSize: 18,
    color: "white"
  },

  imageStyle: {
    width: 250,
    height: 250,
    color: "black"
  }
});
