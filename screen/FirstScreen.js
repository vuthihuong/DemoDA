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
export default  class FirstScreen extends Component {
    static navigationOptions = ({navigation})=>(
        {
            title: 'Home',
            header: ({ navigate }) => {
                title = "Notifications";
                left = (
                  <TouchableOpacity onPress={() => navigate('DrawerOpen') }>
                    <Image
                      source={{ uri: 'https://cdn0.iconfinder.com/data/icons/ui-glyph/100/burger_menu-256.png' }}
                      style={{ width: 30, height: 30, marginLeft: 10 }}
                    />
                  </TouchableOpacity>
                )
          
                return { title, left };
              }
            ,
              headerStyle: styles.header,
              headerTitleStyle: styles.headerTXT,
          
            headerBackTitle: null,
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