import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Cooptation from '../Screens/Cooptation'
import Bookings from '../Screens/Bookings'
import Profile from '../Screens/Profile'
import Home from '../Screens/Home'
import React from 'react'

export default function TabNavigation() {

const BottomTab=createMaterialBottomTabNavigator()

  return (    
      <BottomTab.Navigator 
          initialRouteName='Home'
          activeColor='#f0edf6'
          inactiveColor= ''
          screenOptions={{
          headerShown:false, 
            tabBarActiveTintColor: '#e91e63',
          }}
      >
        <BottomTab.Screen 
            name='Home' 
            component = {Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon:({ color, size }) => (
              <MaterialCommunityIcons name='home' color={color} size={size}  /> 
            ),
          }}
        />
          <BottomTab.Screen 
          name='Cooptation' 
          component = {Cooptation}
          options={{
            tabBarLabel: 'Cooptation',
            tabBarIcon:({color, size}) =>(
              <MaterialCommunityIcons name='google-circles-communities' size={size} color={color}/>
            ),
          }}
        />
        <BottomTab.Screen 
          name='Bookings' 
          component = {Bookings}
          options={{
            tabBarLabel: 'Reservations',
            tabBarIcon:({color, size}) =>(
              <MaterialCommunityIcons name='calendar-month-outline' size={size} color={color}/>
            ),
          }}
        />
        <BottomTab.Screen 
          name='Profile' 
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon:({color, size}) => (
              <MaterialCommunityIcons name='account' size={size} color={color}/> 
            ),
          }}
        /> 
    </BottomTab.Navigator>   
  )
}


