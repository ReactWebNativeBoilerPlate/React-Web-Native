import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

import appStyle from '../../styles/styles';
import Toolbar from '../../components/Toolbar';

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

  onForgetPress() {
      this.props.navigation.navigate("Login");
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Toolbar headerText = 'Forget Password'
          isBackEnabled = {true}
          navigation = {this.props.navigation}></Toolbar>

<View style = {styles.innerContainerStyle}>
        <TextInput style={appStyle.textInputStyle}
          placeholder="Username"
          placeholderTextColor="gray"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TouchableOpacity
          style={[appStyle.buttonStyle, {marginTop : 20}]}
          onPress={this.onForgetPress.bind(this)}
        >
          <Text style={appStyle.buttonTextStyle}>Reset Password</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainerStyle: {
    padding : 20,
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
});
