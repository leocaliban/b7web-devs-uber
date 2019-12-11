import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Preload from '../pages/Preload';
import Login from '../pages/Login/Login';
import HomeDrawer from './HomeDrawer';

export default createAppContainer(createStackNavigator({
    Preload,
    Login,
    HomeDrawer
}, {
    initialRouteName: 'Preload',
    defaultNavigationOptions: {
        header: null
    }
}));