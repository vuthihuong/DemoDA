import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text,
    View, Image, TextInput,
    Button, TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import logo from '../img/logo.png'
import Login from './login'


export default class Signup extends Component {
    static navigationOptions = {
        title: 'Home',
        headerstyle: {
          backgroundColor: 'powderblue',
        },
          headerTitleStyle: {
            color: '#FFFFFF'
          }
      };
      
    
    constructor(props) {
        super(props);
    }
    render(){
        const {navigate} = this.props.navigation.navigate;
        return(
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
                              <Text style={styles.paragraph}>Đăng ký</Text>
                        </TouchableOpacity>
         
                        <TouchableOpacity style={[styles.boxContainer, styles.boxThree]}
                         onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{textAlign: 'center'}}>Đã có tài khoản</Text>
                        </TouchableOpacity>
                        
                    </View>

                </View>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logo: {
        borderColor: 1,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    login: {
        flex: 1,
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
    buttonLogin: {
        alignItems: 'center',
        margin: 0,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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