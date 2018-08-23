import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, Image, TextInput,
    TouchableOpacity
} from 'react-native';
import logo from '../img/logo.png'
import { createStackNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation';

import Signup from './signup'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Login extends Component {
    render() {   
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={logo} style={styles.img} />
                </View>
                <View style={styles.login}>
                    <View style={styles.textLogin}>
                        <TextInput
                            style={{ height: 40, width: 280, borderLeftColor: 1 }}
                            placeholder="Nhập số điện thoại"
                            onChangeText={(text) => this.setState({ text })}                            
                        />
                        <TextInput
                            style={{ height: 40, width: 280, borderLeftColor: 1 }}
                            placeholder="Nhập mật khẩu"
                            onChangeText={(text) => this.setState({ text })}
                        />

                        <TouchableOpacity style={[styles.boxContainer, styles.boxTwo]}
                            >
                              <Text style={styles.paragraph}>Đăng nhập</Text>
                        </TouchableOpacity>
         
                        <TouchableOpacity style={[styles.boxContainer, styles.boxThree]}
                         onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text style={{textAlign: 'center'}}>Đăng ký</Text>
                        </TouchableOpacity>

                    </View>

                </View>


            </View>
        )
    }
}


const App = createDrawerNavigator({
    
    Signup: {
      screen: Signup,
    },
}, {
     contentComponent: (props) => (
        <View>
          <Text>Custom Header</Text>
          <DrawerItems {...props} />
          <Text>Custom Footer</Text>
        </View>
      )
    });
const RootStack = createStackNavigator({
    Login: {
     screen: Login,
   },
   Signup: {
     screen: Signup,
   },
},{
    headerMode:'none'
  });

export default class Logout extends Component {
 render() {
   return <RootStack />;
 }
}
  

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex:1,
        borderColor: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: { 
        flex:1,
        borderColor: 1
    },
    img: {
        width: 220,
        height: 220
    },
    textLogin: {
        flexDirection: 'column',
        alignItems: 'center'
    },
   
    boxContainer: {
        marginTop: 20,
        width: 280,
        height: 30,
        alignItems: 'center',
        borderColor: 1,
        backgroundColor: 'green'
    }
})
