'use strict';

//import React from 'react-native';

import React, { Component } from 'react';

import {
    WebView,
    View,
    StyleSheet,
    Platform,
} from 'react-native';


var DEFAULT_URL = 'http://www.baidu.com/';

import Dimensions from 'Dimensions';

const  Width = Dimensions.get('window').width;
const  Height = Dimensions.get('window').height;

export default class Home extends  React.Component{

    render() {
        return (
            <View style={StyleSheet.webStyle}>
                <WebView
                    style={{height:Height, width:Width}}
                    source={{uri:DEFAULT_URL}}
                    startInLoadingState={true}
                    domStorageEnabled={true}//开启dom存贮
                    javaScriptEnabled={true}//开启js
                />

            </View>


        );
    }

}

const style = StyleSheet.create({
        webStyle:{
            flex:1,
        },
}
);


