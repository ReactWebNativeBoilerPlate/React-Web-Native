import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';
import appStyle from "../styles/styles";

const Toolbar = props => {
  return (
    <View style={appStyle.toolbarStyle}>
      {props.isBackEnabled && (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={require("../../images/arrow_back.png")}
            style={{ width: 24, height: 24, marginRight: 20 }}
          />
        </TouchableOpacity>
      )}
      <Text style={appStyle.toolbarTextStyle}>{props.headerText}</Text>
    </View>
  );
};

Toolbar.propTypes = {
  isBackEnabled : PropTypes.bool,
  headerText : PropTypes.string,
}

export default Toolbar;