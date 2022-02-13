import React,{ Component } from 'react';
import { Text,View,StyleSheet,Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default class BLOGS extends Component {
 
    render() {
      
      return (
   
        <WebView 
        style={styles.WebViewStyle} 
        source={{uri: 'https://www.indiawaterportal.org/faqs/menstruation-and-menstrual-hygiene-management'}} 
        javaScriptEnabled={true}
        domStorageEnabled={true}  />
  
      );
    }
  }
const styles = StyleSheet.create(
    {
     
     WebViewStyle:
     {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        marginTop: (Platform.OS) === 'ios' ? 20 : 0
     }
    });