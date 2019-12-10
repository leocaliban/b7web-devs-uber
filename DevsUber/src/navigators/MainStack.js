import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Preload from '../pages/Preload';
import Login from '../pages/Login';
//import HomeStack from './HomeStack';

export default createAppContainer(createStackNavigator({
    Preload,
    Login,
    //HomeStack
}, {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
        header: null
    }
}));