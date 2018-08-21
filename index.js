/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/Login/login'

import Signup from './src/Login/signup'


AppRegistry.registerComponent(appName, () => Login);
