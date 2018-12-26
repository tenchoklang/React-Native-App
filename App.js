import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './src/components/search';
import NewsList from './src/components/NewsList';
import {NewsProvider} from './src/store/News';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <NewsProvider>
        <AppContainer />
      </NewsProvider>
    );
    // return (
    //   <NewsProvider>
    //     <Search />
    //   </NewsProvider>
    // );
  }
}

const AppNavigator = createStackNavigator({
  Search: {screen: Search},
  NewsList: {screen: NewsList}
});

const AppContainer = createAppContainer(AppNavigator);






