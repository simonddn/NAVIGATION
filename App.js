import { StyleSheet} from 'react-native';
import React from 'react';

import Component1 from './components/Component1';
import RootNavigator from './screens/screen3';

import { NavigationContainer } from '@react-navigation/native';  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Tabs" screenOptions={{headerShown: false }}>
        <Tab.Screen name="Tabs" component={Component1} />
        <Tab.Screen name="Root" component={RootNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
