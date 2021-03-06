import React, { Component } from "react";
import PropTypes from 'prop-types';
import Loader from "../../components/loader";
import ScreenConst from "../../router/ScreenConstants";
import SnackBar from "react-native-snackbar-component";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";

import appStyle from "../../styles/styles";
import Toolbar from "../../components/Toolbar";

/************************** Action ************************/
import * as LoginActions from "../../../actions/LoginAction";

/********************************************************/

/************************** Redux ************************/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
/********************************************************/

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: "",
      success: false,
      loading: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.loginResponse) {
      this.setState({
        loading: false
      });

      console.log(nextProps.loginResponse);
      //delete nextProps.profileData.password;
      this.setState(nextProps.loginResponse);
    }

    if (nextProps.loginFailed) {
      this.setState({
        loading: false
      });
    }
  }

  onLoginPress = () => {
    this.setState({
      message: "",
      loading: false,
      success: false,
      showSnackbar: false,
      snackMessage: ""
    });

    if (this.state.email.length === 0) {
      this.setState({ showSnackbar: true, snackMessage: "Invalid username" });
      return;
    }

    if (this.state.password.length === 0) {
      this.setState({ showSnackbar: true, snackMessage: "Invalid password" });
      return;
    }

    const { email, password } = this.state;
    
    console.log((email, password));
    console.log(this.props.LoginActions);
    // if (this.props.LoginActions) {

    // Uncomment this to show loading indicator
    // this.setState({
    //   loading: true
    // });
    // this.props.LoginActions.doLogin(payload);

    //}
    this.props.navigation.replace(ScreenConst.SCREENS.DASHBOARD);
  };

  render() {
    return (
      <View style={styles.container}>
        <Toolbar headerText="Login" />
        <Loader loading={this.state.loading} />
        <SnackBar
          visible={this.state.showSnackbar}
          textMessage={this.state.snackMessage}
          actionHandler={() => {
            this.setState({ showSnackbar: false });
          }}
          actionText="ok"
        />
        <KeyboardAvoidingView style={styles.keyboard}>
          <View style={styles.window}>
            <TextInput
              style={appStyle.textInputStyle}
              placeholder="Username"
              placeholderTextColor="gray"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View style={styles.window}>
            <TextInput
              style={appStyle.textInputStyle}
              placeholder="Password"
              placeholderTextColor="gray"
              returnKeyType="go"
              secureTextEntry
              ref={input => (this.passwordInput = input)}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text
              style={appStyle.linkStyle}
              onPress={() => this.props.navigation.navigate("ForgetPassword")}
              title="Forget Password"
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[appStyle.buttonStyle, { marginTop: 20 }]}
            onPress={this.onLoginPress}
          >
            <Text style={appStyle.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <TouchableOpacity style={{ alignSelf: "center" }}>
          <Text
            style={appStyle.linkStyle}
            onPress={() => this.props.navigation.navigate("Register")}
            title="Sign up"
          >
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Login.propTypes = {
  loginFailed : PropTypes.bool,
  loginResponse : PropTypes.object,
  LoginActions : PropTypes.any,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 150
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard: {
    padding: 20,
    alignSelf: "stretch"
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
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  },
  window: {
    marginBottom: 15
  },

  textInput: {
    backgroundColor: "rgba(1,1,1,0.4)", // 40% opaque
    color: "white",
    height: 50,
    padding: 10
  }
});

const mapStateToProps = state => {
  console.log("login new mapStateToProps", state);
  return {
    loginResponse: state.loginReducer.loginResponse,
    isLoggedIn: state.loginReducer.isLoggedIn,
    reqFailed: state.loginReducer.reqFailed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    LoginActions: bindActionCreators(LoginActions, dispatch)
  };
};

// Wrap the component to inject dispatch and state into it
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
