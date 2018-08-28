import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation'
// import { Icon } from 'react-native-elements'
import { Icon } from 'react-native-vector-icons';

import Main from './src/home/main'
import ListFavorite from './src/home/listFavorite'
import ManageLetter from './src/home/manageLetter'
import ContractHistory from './src/home/contractHistory'
import AlbumPose from './src/home/albumPose'
import HamburgerIcon from './src/home/hamburgerIcon'
import GoBackIcon from './src/home/goBackIcon'

import InfoCustomer from './src/info/infoCustomer'
import Guide from './src/home/guide'
import ResetPass from './src/info/resetPass'


import menu from './src/menu/img/menu.png'
import notifi from './src/menu/img/notifi.png'
import home from './src/menu/img/home.png'
// import person from './src/info/imgInfo/person.png'

    const InfoCustomerStack = StackNavigator({
      InfoCustomer: { 
        screen: InfoCustomer, 
        navigationOptions: ({ navigation }) => ({
          title: 'Nguyễn Kim Thu',
          // header: null,
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerRight :  <Image source={notifi} style={{width: 30, height: 30}} />,
          // headerRight :  <Image source={notifi} style={{width: 30, height: 30, tintColor: 'green'}} />,
          // headerTitleStyle: styles.titleMenu,
          // headerStyle: {
          //   backgroundColor: 'white',           
          // },
          // headerTintColor: 'green', 
          headerMode: 'none'
        })
      },
    },{ 
      headerMode: 'screen' 
    });

    const MainStack = StackNavigator({
      Main: { 
        screen: Main, 
        navigationOptions: ({ navigation }) => ({
          title: 'Trang chủ',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerRight :  <Image source={notifi} style={{width: 30, height: 30, tintColor: 'green'}} />,
          headerTitleStyle: styles.titleMenu,
          headerStyle: {
            backgroundColor: 'white',            
          },
          headerTintColor: 'green',          
        })
      },
    });

    const ListFavoriteStack = StackNavigator({
      ListFavorite: { 
        screen: ListFavorite, 
        navigationOptions: ({ navigation }) => ({
          title: 'Danh sách yêu thích',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerStyle: {
            backgroundColor: 'white'
          },
          headerTintColor: 'green',
        })
      },
    });

    const ContractHistoryStack = StackNavigator({
      ContractHistory: { 
        screen: ContractHistory, 
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

    const ManageLetterStack = StackNavigator({
      ManageLetter: { 
        screen: ManageLetter, 
        navigationOptions: ({ navigation }) => ({
          title: 'Quản lý hợp đồng',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          //  headerRight :  <Image source={menu} style={{width: 30, height: 30}} />,
          headerStyle: {
            backgroundColor: '#FF9800',
          //  paddingTop: -330
          },
          headerTitleStyle: styles.titleMenu,
          // headerTintColor: '#fff',
        })
      },
    });

    const AlbumPoseStack = StackNavigator({
      AlbumPose: { 
        screen: AlbumPose, 
        navigationOptions: ({ navigation }) => ({
          title: 'Cách tạo dáng chụp ảnh',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerTitleStyle: styles.titleMenu,
          headerStyle: {
            backgroundColor: 'white',           
          },
          // headerTintColor: 'green', 
        })
      },
    });

    const GuideStack = StackNavigator({
      Guide: { 
        screen: Guide, 
        navigationOptions: ({ navigation }) => ({
          title: 'Hướng dẫn chụp ảnh an toàn',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerTitleStyle: styles.titleMenu,
          headerStyle: {
            backgroundColor: 'white',           
          },
          // headerTintColor: 'green', 
        })
      },
    });

    const ResetPassStack = StackNavigator({
      InfoCustomer: {screen: InfoCustomer},
      ResetPass: {screen: ResetPass},
      navigationOptions: ({navigation})=>( {
        headerStyle: {
          marginTop: <HamburgerIcon navigationProps={ navigation }/>, 
        }
      }
    )
    });

  //  const Project = StackNavigator(
  //     {
  //      First: { screen: InfoCustomer },
       
  //      Second: { screen: ResetPass }
  //     });

    
export default MyDrawerNavigator = DrawerNavigator({
  InfoCustomer: {
    screen: InfoCustomerStack,
    navigationOptions: {
      // title: 'Trần Nam Anh',
      drawerLabel: 'Nguyễn Kim Thu',
      
    //   drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={person}
    //     style={[{width: 70, height: 50}, {tintColor: tintColor}]}
    //   />
    // ),
  },
},

  Main: { 
    screen: MainStack,
    navigationOptions: {
      // title: 'Trang chủ',
      drawerLabel: 'Trang chủ',
    //   drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={home}
    //     style={[{width: 30, height: 30}, {tintColor: tintColor}]}
    //   />
    // ),
  },
  },

  ListFavorite: { 
    screen: ListFavoriteStack,
    navigationOptions: {
      // title: 'Trang chủ',
      drawerLabel: 'Danh sách yêu thích',
      // drawerIcon: ({ tintColor }) => (
      // <Image
      //   source={home}
      //   style={[{width: 30, height: 30}, {tintColor: tintColor}]}
      // />
    // ),
  },
  },

  AlbumPose: { 
    screen: AlbumPoseStack,
    navigationOptions: {
      // title: 'Trang chủ',
      drawerLabel: 'Cách tạo dáng',
      // drawerIcon: ({ tintColor }) => (
      // <Image
      //   source={home}
      //   style={[{width: 30, height: 30}, {tintColor: tintColor}]}
      // />
    // ),
  },
  },

  ContractHistory: { 
    screen: ContractHistoryStack,
    navigationOptions: {
      // title: 'Trang chủ',
      drawerLabel: 'Lịch sử hợp đồng',
    //   drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={home}
    //     style={[{width: 30, height: 30}, {tintColor: tintColor}]}
    //   />
    // ),
  },
  }, 

  ManageLetter: {
    screen: ManageLetterStack,
    navigationOptions: {
      drawerLabel: 'Quản lý hợp đồng',
    //   drawerIcon:({tintColor}) => (
    //     <Image 
    //         source={home}
    //         style={[{tintColor:'pink', width: 20, height: 20}]}
    //     />
    // ),
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      activeBackgroundColor: '#10ACBB',
      style:{margin: 100}
    },
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#10ACBB',
      // inactiveTintColor: 'black',
      labelStyle: 'normal'
    }
  },

  Guide: { 
    screen: GuideStack,
    navigationOptions: {
      // title: 'Trang chủ',
      drawerLabel: 'Hướng dẫn chụp ảnh an toàn ',
      // drawerIcon: ({ tintColor }) => (
      // <Image
      //   source={home}
      //   style={[{width: 30, height: 30}, {tintColor: tintColor}]}
      // />
    // ),
  },
  },
}, {
  drawerWidth: 250,
  drawerPosition: 'left',
  
  style: {
    // paddingTop: 80, // This only works if you modify DrawerNavigator.js to pass style props. See link

  },
  initialRouteName: 'Main',
  headerMode: 'none'  
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
  },
  icon1: {
    width:10,
    height: 10
  }

})