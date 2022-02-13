import React,{ Component } from 'react';
import { Text,View,StyleSheet,Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default class SONGS extends Component {
 
    render() {
      
      return (
   
        <WebView 
        style={styles.WebViewStyle} 
        source={{uri: 'https://music.youtube.com/playlist?list=PLeGfUemt1aeCeEg3WytWfaBeJakXHogZL'}} 
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