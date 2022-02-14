import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Provider as StoreProvider } from "react-redux";
import HOME from "./src/screens/homescreen";
import FAQ from "./src/screens/appfaq";
import NOTEPAD from "./src/screens/notepad";
import VIEWNOTES from "./src/screens/viewnotes";
import SONGS from "./src/screens/songs";
import BLOGS from "./src/screens/blogs";
import VIDEO from "./src/screens/video";
import USERPROFILE from "./src/screens/userprofile";
import VIDEOPLAYER from "./src/screens/videoplayer";
import store from "./src/reducer/store";

// const Drawer = createDrawerNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HOME} />
          <Drawer.Screen name="Notepad" component={NOTEPAD} />
          <Drawer.Screen name="Song" component={SONGS} />
          <Drawer.Screen name="Video" component={VIDEO} />
          <Drawer.Screen name="Blogs" component={BLOGS} />
          <Drawer.Screen name="View Notes" component={VIEWNOTES} />
          <Drawer.Screen name="Video Player" component={VIDEOPLAYER} />
          <Drawer.Screen name="User Profile" component={USERPROFILE} />
          <Drawer.Screen name="About Us" component={FAQ} />
        </Drawer.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}
