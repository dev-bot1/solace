import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HOME from './src/screens/homescreen';
import FAQ from './src/screens/appfaq';
import NOTEPAD from './src/screens/notepad';
import VIEWNOTES from './src/screens/viewnotes';
import SONGS from './src/screens/songs';
import BLOGS from './src/screens/blogs';
import VIDEO from './src/screens/video';
import USERPROFILE from './src/screens/userprofile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Viewnote">
        <Stack.Screen name="Home" component={HOME} />
        <Stack.Screen name="Notepad" component={NOTEPAD} />
        <Stack.Screen name="Viewnote" component={VIEWNOTES} />
        <Stack.Screen name="Faq" component={FAQ} />
        <Stack.Screen name="Song" component={SONGS} />
        <Stack.Screen name="Blogs" component={BLOGS} />
        <Stack.Screen name="Video" component={VIDEO} />
        <Stack.Screen name="Userprofile" component={USERPROFILE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}