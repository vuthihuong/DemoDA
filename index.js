/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import AppDemo from './AppDemo'
import {name as appName} from './app.json';
import Login from './src/Login/login'
import DrawerExample from './App'
import Signup from './src/Login/signup'
// import ResetPass from './src/info/resetPass'
import InfoCustomer from './src/info/infoCustomer'
// import InfoDetailPhoto from './src/info/infoDetailPhoto'



AppRegistry.registerComponent(appName, () => AppDemo);
