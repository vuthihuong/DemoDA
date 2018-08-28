import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import HamburgerIcon from './hamburgerIcon'

export default class AlbumPose extends Component { 
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
              <TouchableOpacity>
                  <Text style={styles.textMain}>Trang chủ </Text>  
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text style={styles.textMain}>Cách tạo dáng</Text>
              </TouchableOpacity>
             <TouchableOpacity>
                  <Text style={styles.textMain}>Tìm View đẹp</Text>
             </TouchableOpacity>
              <TouchableOpacity>
                   <Text style={styles.textMain}>Tạo sự kiện</Text>
              </TouchableOpacity>
           </View>
        );
     }
  }

  const styles = StyleSheet.create({
    
    MainContainer :{
      backgroundColor: '#F8F8FF',
     flex:1,
     flexDirection: 'row',
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    //  alignItems: 'center',
    //  justifyContent: 'center',
       
     },
     textMain: {
       margin: 8
     }
   
   })