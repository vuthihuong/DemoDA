import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import MainActivity from './src/home/main'
import SecondActivity from './src/home/listOfLike'
import ThirdActivity from './src/home/manageHistory'
import HamburgerIcon from './src/home/iconheader'
import menu from './src/menu/img/menu.png'
import ManageContract from './src/home/manageContract'

  
    const FirstActivity_StackNavigator = StackNavigator({
      First: { 
        screen: MainActivity, 
        navigationOptions: ({ navigation }) => ({
          title: 'Trang chủ',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerTitleStyle: styles.titleMenu,
          headerStyle: {
            backgroundColor: '#008000'
          },
          headerTintColor: '#fff',
        })
      },
    });


    const SecondActivity_StackNavigator = StackNavigator({
      Second: { 
        screen: SecondActivity, 
        navigationOptions: ({ navigation }) => ({
          title: 'Danh sách yêu thích',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,

          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });


    const ThirdActivity_StackNavigator = StackNavigator({
      Third: { 
        screen: ThirdActivity, 
        navigationOptions: ({ navigation }) => ({
          title: 'Lịch sử hợp đồng',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          // headerRight :  <Image source={menu} style={{width: 30, height: 30}} />,

          headerStyle: {
            backgroundColor: '#FF9800',
          //  paddingTop: -330
          },
          headerTitleStyle: styles.titleMenu,
          headerTintColor: '#fff',
        })
      },
    });

    const FourActivity_StackNavigator = StackNavigator({
      Four: { 
        screen: ManageContract, 
        navigationOptions: ({ navigation }) => ({
          title: 'Quản lý hợp đồng',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          // headerRight :  <Image source={menu} style={{width: 30, height: 30}} />,

          headerStyle: {
            backgroundColor: '#FF9800',
          //  paddingTop: -330
          },
          headerTitleStyle: styles.titleMenu,
          headerTintColor: '#fff',
        })
      },
    });
    
export default MyDrawerNavigator = DrawerNavigator({
  Menu: { 
    screen: FirstActivity_StackNavigator,
    style:
      {backgroundColor : 'purple',
      width: 5, height: 50}
  },

  Love: { 
    screen: SecondActivity_StackNavigator
  },

  History: { 
    screen: ThirdActivity_StackNavigator
  }, 

  Contract: {
    screen: FourActivity_StackNavigator
  }
});

    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  alignItems: 'center',
  justifyContent: 'center',
    
  },
  titleMenu: {
    // marginTop: 100
  }

})