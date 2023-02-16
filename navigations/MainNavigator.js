import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StatusBar } from 'react-native'

import ListScreen from '../screen/ListScreen'
import DetailScreen from '../screen/DetailScreen'
import ReportScreen from '../screen/ReportScreen'
import Header from '../component/header'

const listName = 'List'
const detailName = 'Details'
const reportName = 'Report'

const Tab = createBottomTabNavigator();


const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#007DC5"/>
      <Header/>
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
          },tabBarStyle:{
            backgroundColor:'#333333',
            height:60,
          }
        })}
       >

        <Tab.Screen name={listName} component={ListScreen} options={{headerShown:false}} />
        <Tab.Screen name={detailName} component={DetailScreen} options={{headerShown:false}} />
        <Tab.Screen name={reportName} component={ReportScreen}  options={{headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator