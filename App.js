/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import FirstScreen from './screen/FirstScreen';
import SecondScreen from './screen/SecondScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }
const MenuButton = (props) => (
  <TouchableOpacity onPress={()=>{props.navigation.navigate('DrawOpen')}}>
       <Icon name="bars" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}}/>
  </TouchableOpacity>
);

const DrawerIcon = () => {
    return(
    <View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('DrawerOpen'); } }>
            <Icon name="bars" style={{padding: 10, marginLeft:10}} size={20} color="black" type={"font-awesome"}/>
        </TouchableOpacity>
    </View>
    );
};

const DrawerExample = DrawerNavigator(
  {
    First: {
      // path: '/',
      screen: FirstScreen
    },
    Second: {
      // path: '/second',
      screen: SecondScreen
    }
  },
  {
    initialRouteName: 'First',
    drawerPosition: 'left',
    drawerWidth: 200,
    headerLeft : <MenuButton  />,
    contentOptions: {
      activeTintColor: 'red',
     
    }
  }
);


export default DrawerExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
