import { StackNavigator, TabNavigator } from 'react-navigation';

// import custom components
import HomeScreen from '../screens/HomeScreen';
import FeedsScreen from '../screens/FeedsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StackScreen from '../screens/StackScreen';

/**
 * home
 *  - homestack (subnavigation)
 *  - stackscreen (another random screen)
 * feeds
 *  - feedsscreen
 * profile
 *  - profilescreen
 */

export const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Stack: {
    screen: StackScreen,
  },
});

// main app bottom navigation
export const Nav = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Feeds: {
    screen: FeedsScreen,
    navigationOptions: {
      tabBarLabel: 'Feeds',
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
    },
  },
});