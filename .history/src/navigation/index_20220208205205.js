import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import HOME from './src/screens/homescreen';
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
AddNotes:{
    screen: AddNotes
}
},
{
    initialRouteName: 'HOME',
    headerMode : 'none',
    mode: 'modal'
}
)

export default createAppContainer(StackNavigator)
