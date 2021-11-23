import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from '../global/styles/theme'

import { Home } from '../screens/Home'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.secondary80 }
      }}
    >
      <Screen name="Home" key="Home" component={Home} />
      <Screen
        name="AppointmentDetails"
        key="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Screen
        name="AppointmentCreate"
        key="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  )
}
