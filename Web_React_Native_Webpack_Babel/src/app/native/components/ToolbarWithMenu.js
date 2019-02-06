import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import appStyle from "../styles/styles";

export default (props => {
  return (
    <View style={appStyle.toolbarStyle}>
      <TouchableOpacity onPress={() => {props.navigation.toggleDrawer();}}>
        <Image
          source={require("../../images/ic_menu.png")}
          style={{ width: 24, height: 24, marginRight: 20 }}
        />
      </TouchableOpacity>
      <Text style={appStyle.toolbarTextStyle}>{props.headerText}</Text>
    </View>
  );
});

