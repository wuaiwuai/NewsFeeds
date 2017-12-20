import { StackNavigator, TabNavigator } from 'react-navigation';

// import custom components
import HomeScreen from '../screens/HomeScreen';
import FeedsScreen from '../screens/FeedsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ArticleScreen from '../screens/ArticleScreen';
import LoginHomeScreen from '../screens/LoginHomeScreen';

/**
 * homestack
 *  - homescreen (subnavigation)
 *  - articlescreen (article page)
 * feeds
 *  - feedsscreen
 * profile
 *  - profilescreen
 */

export const HomeStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Article: {
    screen: ArticleScreen,
  },
});

export const LoginNavStack = StackNavigator({
  LoginHome: {
    screen: LoginHomeScreen,
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
