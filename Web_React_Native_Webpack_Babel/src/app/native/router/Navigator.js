/**
 * https://medium.com/async-la/a-stately-guide-to-react-navigation-with-redux-1f90c872f96e
 */
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

/*************** Navite mobile screens **************************/
import SplashScreen from '../containers/Splash'
import Dashbaord from '../containers/dashboard/Dashboard';
// import LoginScreen from '../containers/AuthScreen/index'

import ForgetPassword from "../containers/login/ForgetPassword";
import Register from "../containers/login/Register";
import LoginHome from "../containers/login/index"

/****************************************************************/


/*************** Stack Navigator **************************/
const AppNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }

  },
  LoginHome: {
    screen: LoginHome,
    navigationOptions: {
      title: "LoginHome"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: "ForgetPassword"
    }
  },
  Dashboard: {
    screen: Dashbaord,
    navigationOptions: {
      title: "Dashbaord"
    }
  },
});


/****************************************************************/



class Navigator extends Component {
  render() {
    return (<AppNavigator />);
  }
}

export default Navigator;