import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import launchImagePicker from "../../utils/ImagePickerUtils";
import appStyles from '../styles/styles';
import Toolbar from "./Toolbar";

export default class ImagePicker extends Component {
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
          headerText="Select Image"
          isBackEnabled={true}
          navigation={this.props.navigation}
        />
        <Image style={styles.imageStyle}
         source={this.state.avatarSource}
         defaultSource = {require('../../images/ic_upload.png')} />

        <TouchableOpacity
          style={appStyles.buttonStyle}
          onPress={() =>
            launchImagePicker(this.onResult, this.onCancel, this.OnError)
          }
        >
          <Text style={appStyles.buttonTextStyle}>Load Image</Text>
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
    alignItems : 'center',
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
    width: '90%',
    height: '60%',
    marginBottom : 20,
    resizeMode : 'contain',
  }
});
