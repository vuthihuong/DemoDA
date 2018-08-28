import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' //icon with material design

import menu from '../src/menu/img/menu.png'
import { Icon } from 'react-native-elements'

const MenuButton = (props) => (
    <TouchableOpacity onPress={()=>{props.navigation.navigate('DrawOpen')}}>
        <Icon name="menu" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}}/>
    </TouchableOpacity>
);

class ActionBarImage extends Component {
 
    render() {
   
      return (
   
        <View style={{flexDirection: 'row'}}>
   
          <Image
            source={{uri : 'https://secure.gravatar.com/avatar/dbbab0050db2dbd84d4e2c844196ee0c?s=60&d=mm&r=g'}}
            style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
          />
   
        </View>
      
      );
    
    
    }
  }

export default  class FirstScreen extends Component {
    static navigationOptions = ({navigation})=>(
        {
            title: 'Home',
            

            headerLeft: (<Button onPress={()=> this.props.navigation.navigate('DrawOpen')}
            title="Open DrawNavigator"
            />),
            tabBarLabel: 'Screen 1',
            drawerIcon: ({tintColor}) => {
                return(
                    <MaterialIcons 
                        name="card-membership"
                        size={24}
                        style={{color: tintColor}}>
    
                    </MaterialIcons>
                );
            }
        }
    )

    render(){
        return(
            <View style = {{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text style = {{fontSize: 30, color: 'green'}}>Screen 1</Text>
                    <Button onPress={()=> this.props.navigation.navigate('DrawOpen')}
                    title="Open DrawNavigator"
                    />
               
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
      },
      headerTXT: {
        alignSelf:'center',  
        fontFamily: 'SlatePro-Medium',
        fontSize: 22,  
        color: 'white',
        textAlign: 'center',
      },
      imageForButtonInfo: {
        width: 28, height: 28, 
        right: (Platform.OS === 'ios') ? 10 : 10,
        bottom: (Platform.OS === 'ios') ? 5: 0 
      },
})