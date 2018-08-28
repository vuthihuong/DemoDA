import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Navigator} from 'react-native';

import InfoCustormer from './../info/infoCustomer'
import ResetPass from './../info/resetPass'

export default class DemoNavigator extends Component{
    _renderScene(route, navigator){
        let name = route.name;
        switch(name){
            case 'infoCustomer':
                return <InfoCustormer navigator={navigator}/>
            case 'resetPass' :
                return <ResetPass />
        }
    }
    render(){
        return(
            <Navigator
                initialRoute={{name:'dangnhap'}}
                renderScene={this._renderScene.bind(this)}
            />
        )
    }
}