import React, { Component } from "react";
import PropTypes from 'prop-types';
import Loader from "../../components/loader";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      loading: false,
      message: ""
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.loginFailed) {
      this.setState({
        loading: false
      });
    } else if (nextProps.isSignupSuccess) {
      this.setState({
        loading: false
      });
      this.props.navigation.goBack();
    } else {
      this.setState({
        loading: false,
        message: nextProps.signupResponse.message
      });
    }
  }

  async onRegisterPress() {
    const { email, password, name } = this.state;
    var dataToUpdate = {
      first_name: name,
      email: email,
      password: password
    };
    this.setState({
      loading: true
    });

    this.props.LoginActions.doSignup(dataToUpdate);
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          headerText="Register"
          isBackEnabled={true}
          navigation={this.props.navigation}
        />

        <Loader loading={this.state.loading} />

        <View style={styles.innerContainerStyle}>
          <KeyboardAvoidingView>
            <TextInput
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              style={[appStyle.textInputStyle, { marginBottom: 8 }]}
              placeholder="Name"
              placeholderTextColor="gray"
              returnKeyType="next"
              onSubmitEditing={() => this.emailInput.focus()}
            />
            <TextInput
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={[appStyle.textInputStyle, { marginBottom: 8 }]}
              placeholderTextColor="gray"
              returnKeyType="next"
              ref={input => (this.emailInput = input)}
              onSubmitEditing={() => this.passwordCInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Email"
            />
            <TextInput
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={[appStyle.textInputStyle, { marginBottom: 8 }]}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="gray"
              ref={input => (this.passwordCInput = input)}
              onSubmitEditing={() => this.passwordInput.focus()}
              returnKeyType="next"
            />
            <TextInput
              value={this.state.password}
              onChangeText={password_confirmation =>
                this.setState({ password_confirmation })
              }
              style={[appStyle.textInputStyle, { marginBottom: 8 }]}
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor="gray"
              returnKeyType="go"
              ref={input => (this.passwordInput = input)}
            />
          </KeyboardAvoidingView>
          <TouchableHighlight
            onPress={this.onRegisterPress.bind(this)}
            style={[appStyle.buttonStyle, { marginTop: 20 }]}
          >
            <Text style={appStyle.buttonTextStyle}>Register</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Register.propTypes = {
  loginFailed : PropTypes.bool,
  isSignupSuccess : PropTypes.bool,
  signupResponse : PropTypes.object,
  LoginActions : PropTypes.any,
  doSignup : PropTypes.func,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  innerContainerStyle: {
    padding: 20
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
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  button: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20
  }
});

const mapStateToProps = state => {
  console.log("login new mapStateToProps", state);
  return {
    signupResponse: state.loginReducer.signupResponse,
    isSignupSuccess: state.loginReducer.isSignupSuccess
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
)(Register);
