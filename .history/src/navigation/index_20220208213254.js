import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import HOME from '../screens/homescreen';
import FAQ from './src/screens/appfaq';
import NOTEPAD from './src/screens/notepad';
import SONGS from './src/screens/songs';
import BLOGS from './src/screens/blogs';
import VIDEO from './src/screens/video';
import USERPROFILE from './src/screens/userprofile';

const StackNavigator = createStackNavigator({
HOME: {
    screen: HOME
},
FAQ:{
    screen: FAQ
},
SONGS:{
    screen: SONGS
},
NOTEPAD:{
    screen: NOTEPAD
},
BLOGS:{
    screen: BLOGS
},
VIDEO:{
    screen: VIDEO
},
USERPROFILE:{
    screen: USERPROFILE
}
},
{
    initialRouteName: 'HOME',
    headerMode : 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator)
