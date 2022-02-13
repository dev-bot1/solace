import { StackView } from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Picker,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const VIDEO = ({navigation}) => {
  const AppButton = ({ onPress, icon, title, backgroundColor }) => (
    <View style={styles.appButtonContainer}>
      <Icon.Button
        name={icon}
        backgroundColor={backgroundColor}
        onPress={() =>
              navigation.navigate('Videoplayer', {
                paramKey: onPress,
              })}
        style={styles.appButton}
      >
        <Text style={styles.appButtonText}>{title}</Text>
      </Icon.Button>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 2}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Hey Select Your Mood Below
        </Text>
        <View style={styles.screenContainer}>
          <View>
          <AppButton onPress="jsEcDAx8S1g" icon="tty" title="Crisis" backgroundColor="red"/>
          <AppButton onPress="AUr-iNA0AM8" icon="empire" title="Anxiety" backgroundColor="lightblue"/>
          <AppButton onPress="DODLEX4zzLQ" icon="smile-o" title="Happy" backgroundColor="green"/>
          {/* <AppButton onPress="NGVYIlDLgKc" icon="smile-o" title="{User}Mood" backgroundColor="green"/> */}
          </View>
          <View>
          <AppButton onPress="RBumgq5yVrA" icon="heart" title="Romantic" backgroundColor="pink"/>
          <AppButton onPress="ur48jVNNlKk" icon="cloud" title="Sad" backgroundColor="grey"/>
          <AppButton onPress="eA8iYzlYMFo" icon="eye-slash" title="Pampering" backgroundColor="magenta"/>
          {/* <AppButton onPress={this.vfunction(Pampering)} icon="eye-slash" title="Pampering" backgroundColor="magenta"/> */}
          </View>
        </View>
        {/* <Picker
        value={userName}
        style={{ height: 1, width: 200 }}
        onValueChange={(username) => setUserName(username)}
        >
        <Picker.Item label="Crisis" value="jsEcDAx8S1g" />
        <Picker.Item label="Anxiety" value="AUr-iNA0AM8" />
        <Picker.Item label="Happy" value="DODLEX4zzLQ" />
        <Picker.Item label="Romantic" value="RBumgq5yVrA" />
        <Picker.Item label="Need Pampering" value="eA8iYzlYMFo" />
      </Picker> */}
        {/* <Text style={styles.textStyle}>
          Selected Mood is
        </Text>  */}
        {/*Input to get the value from the user*/}
        {/* <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Enter Any value'}
          style={styles.inputStyle}
        /> */}
        {/* On click of the button we will send the data as a Json
          From here to the Second Screen using navigation */}
      </View>
    </SafeAreaView>
  );
};

export default VIDEO;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 5,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  appButton: {
    padding: 6,
  },
  appButtonText: {
    fontSize: 30,
  },
  appButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  screenContainer: {
    flex: 0.4,
    flexDirection:'row',
    // justifyContent: "center",
    padding: 30,
    // backgroundColor: "#555",
  },
});