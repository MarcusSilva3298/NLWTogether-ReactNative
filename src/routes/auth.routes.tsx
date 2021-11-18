import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SingIn } from '../screens/SingIn'

import { theme } from '../global/styles/theme'
import { AppointmentDetails } from '../screens/AppointmentDetails'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.secondary80 }
      }}
    >
      <Screen name="SingIn" key="SingIn" component={SingIn} />
      <Screen name="Home" key="Home" component={Home} />
      <Screen
        name="AppointmentDetails"
        key="AppointmentDetails"
        component={AppointmentDetails}
      />
    </Navigator>
  )
}
