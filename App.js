import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import SettingsPage from './SettingsPage';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator for Home page
const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen name="HomeScreen" component={HomePage} options={{ title: 'Welcome Home' }} />
  </Stack.Navigator>
);

// Stack Navigator for About page
const AboutStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen name="AboutScreen" component={AboutPage} options={{ title: 'About Us' }} />
  </Stack.Navigator>
);

// Stack Navigator for Settings page
const SettingsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
    }}
  >
    <Stack.Screen name="SettingsScreen" component={SettingsPage} options={{ title: 'Settings' }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" children={HomeStack} />
        <Tab.Screen name="About" children={AboutStack} />
        <Tab.Screen name="Settings" children={SettingsStack} />
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
