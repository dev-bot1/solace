
import React, {Component} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component{
    constructor(props)
    {
        super();
    }


render() {
    return(
        <View 
        style={{
            flex:1,
            backgrounColor: '#ff7bbe'
        }}
        >
             <LottieView 
                source={require("C:\Users\jayant kumar\Desktop\solace\solace\assets\splash.json")} 
                autoPlay 
                loop={false}
            />
        </View>
    )
        }
}


