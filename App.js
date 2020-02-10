import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import 'react-native-gesture-handler';
import OTPScreen from './src/screens/OTPScreen';
import store from './Redux/store';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DashBoardScreen from './src/screens/DashBoardScreen';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Otp: OTPScreen,
    DashBoard: DashBoardScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Login'
    }
  }
);

const AppContainer = createAppContainer(Navigator);
export default AppContainer;
