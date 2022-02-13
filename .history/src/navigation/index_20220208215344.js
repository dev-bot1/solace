import {createAppContainer} from '@react-navigation'
import {createStackNavigator} from '@react-navigation-stack'

import HOME from '../screens/homescreen';
import FAQ from '../screens/appfaq';
import NOTEPAD from '../screens/notepad';
import SONGS from '../screens/songs';
import BLOGS from '../screens/blogs';
import VIDEO from '../screens/video';
import USERPROFILE from '../screens/userprofile';

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
