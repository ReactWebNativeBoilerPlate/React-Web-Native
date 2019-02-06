/**
 * https://medium.com/async-la/a-stately-guide-to-react-navigation-with-redux-1f90c872f96e
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

/*************** Navite mobile screens **************************/
import SplashScreen from '../containers/Splash'
import Drawer from '../containers/dashboard/Drawer';
// import LoginScreen from '../containers/AuthScreen/index'



import ForgetPassword from "../containers/login/ForgetPassword";
import Register from "../containers/login/Register";
import LoginHome from "../containers/login/index"

import FilePicker from '../components/FilePicker';
import CameraView from '../components/ImagePickerView';
import MapView from '../components/MapView'
import ChartView from '../components/ChartView'

/****************************************************************/


/*************** Stack Navigator **************************/
const AppNavigator = StackNavigator({
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
      header: null
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Drawer,
    navigationOptions: {
      header: null
    }
  }, FilePicker: {
    screen: FilePicker,
    navigationOptions: {
      header: null
    }
  }, CameraView: {
    screen: CameraView,
    navigationOptions: {
      header: null
    }
  }, MapView: {
    screen: MapView,
    navigationOptions: {
      header: null
    }
  }, ChartView: {
    screen: ChartView,
    navigationOptions: {
      header: null
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