import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' //icon with material design

export default  class SecondScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Screen 1',
        drawerIcon: ({tintColor}) => {
            return(
                <MaterialIcons 
                    name="change-history"
                    size={24}
                    style={{color: tintColor}}>

                </MaterialIcons>
            );
        }
    }

    render(){
        return(
            <View style = {{flex:1, justifyContent: "center", alignItems: "center"}}>
                <Text style = {{fontSize: 30, color: 'blue'}}>Screen 2</Text>
                <Button onPress={()=> this.props.navigation.navigate('DrawOpen')}
                title="Open DrawNavigator"
                ></Button>
            </View>
            
        )
    }
}