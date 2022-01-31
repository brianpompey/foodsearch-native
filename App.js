import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen';
import StarPage from './src/screens/StarPage';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  Star: StarPage,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'NYC Restaurant Search'
  }
});


export default createAppContainer(navigator);