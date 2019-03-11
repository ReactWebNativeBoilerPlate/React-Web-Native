/** @format */

import {AppRegistry} from 'react-native';
import './src/app/locales/i18n';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
