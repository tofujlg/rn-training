import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ListScreen from '../screen/ListScreen'
import DetailScreen from '../screen/DetailScreen'
import ReportScreen from '../screen/ReportScreen'

const listName = 'List'
const detailName = 'Details'
const reportName = 'Settings'

const Tab = createBottomTabNavigator();


const MainNavigator = () => {
  return (
    <NavigationContainer>
         <Tab.Navigator
        initialRouteName={detailName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === listName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === reportName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
       >

        <Tab.Screen name={listName} component={ListScreen} />
        <Tab.Screen name={detailName} component={DetailScreen} />
        <Tab.Screen name={reportName} component={ReportScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator