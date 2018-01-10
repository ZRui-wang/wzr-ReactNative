'use strict';

import React from 'react-native';

import {
    WebView
} from 'react-native';


var DEFAULT_URL = 'https://www.baidu.com/';

import Dimensions from 'Dimensions';

const  Width = Dimensions.gen('window').width;
const  Height = Dimensions.gen('window').height;

class Home extends  React.Component{

    render() {
        return (
            <view style={styles.webStyle}>
                <WebView
                    style={{height:Height, width:Width}}
                    source={{uri:DEFAULT_URL}}
                />

            </view>

        );
    }

}

const style = StyleSheet.create({
        webStyle:{
            flex:1
        },
}
);

export {Home as default};
