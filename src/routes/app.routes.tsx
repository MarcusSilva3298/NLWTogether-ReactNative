import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { theme } from '../global/styles/theme'

import { Home } from '../screens/Home'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'

const Stack = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" key="Home" component={Home} />
      <Stack.Screen
        name="AppointmentDetails"
        key="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Stack.Screen
        name="AppointmentCreate"
        key="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Stack.Navigator>
  )
}
