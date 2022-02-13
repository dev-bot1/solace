import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HOME} />
//         <Stack.Screen name="Notepad" component={NOTEPAD} />
//         <Stack.Screen name="Faq" component={FAQ} />
//         <Stack.Screen name="Song" component={SONGS} />
//         <Stack.Screen name="Blogs" component={BLOGS} />
//         <Stack.Screen name="Video" component={VIDEO} />
//         <Stack.Screen name="Userprofile" component={USERPROFILE} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
