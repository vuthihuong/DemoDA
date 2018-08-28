import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import HamburgerIcon from './hamburgerIcon'

import iconInfo from './../info/imgInfo/iconInfo.png'
import heart from './../img/heart.png'
import comment from './../img/comment.png'
import row from './../img/row.png'


export default class ListFavorite extends Component {

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
     
             <View style = { styles.containerFavor }>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={ styles.likeperson }>
                        <Image source={iconInfo} style={{width: 50, height: 50, marginRight: 20}} />
                        <View style={styles.details}>
                          <Text>Trần Nam Anh</Text>
                          <View style={styles.rate}>
                              <Image source ={heart} style={{width: 20, height: 20, 
                                                        marginRight: 5, marginTop:10}} />
                              <Text style={{marginTop: 10}}>1</Text>
                              <Image source ={comment} style={{width: 20, height: 20, 
                                                        marginLeft: 20, marginTop: 10, marginRight: 5}} />
                              <Text style={{marginTop: 10}}>1</Text>
                          </View>
                        
                        </View>
                      
                      </View>

                      <View><Image source={row} style={{width: 20, height: 20,
                                  marginTop: 35, marginRight: 20}} /></View>
                </TouchableOpacity>
                 
             </View>
          );
       }
    }
      const styles = StyleSheet.create({
    
        containerFavor :{
            flex: 1,
            backgroundColor: 'white'
         },
         likeperson: {
           flexDirection: 'row',
           marginLeft: 20, marginRight: 20, marginTop: 20
         },
         details: {
           flexDirection: 'column'
         },
         rate: {
           flexDirection: "row"
         }
       
       })