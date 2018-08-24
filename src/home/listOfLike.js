import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import HamburgerIcon from './iconheader'


export default class SecondActivity extends Component {

    constructor(props) {
   
      super(props);
    
      YellowBox.ignoreWarnings([
       'Warning: componentWillMount is deprecated',
       'Warning: componentWillReceiveProps is deprecated',
     ]);
    
    }
     
       render()
       {
          return(
     
             <View style = { styles.MainContainer }>
     
                <Text style={{fontSize: 23}}> This is Activity - 2 </Text>
              
             </View>
          );
       }
    }
      const styles = StyleSheet.create({
    
        MainContainer :{
        
         flex:1,
         paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
         alignItems: 'center',
         justifyContent: 'center',
           
         }
       
       })