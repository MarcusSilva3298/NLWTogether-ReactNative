import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { SingIn } from '../screens/SingIn'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' }
      }}
      defaultScreenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}
    >
      <Screen name="SingIn" key="SingIn" component={SingIn} />
      <Screen name="Home" key="Home" component={Home} />
    </Navigator>
  )
}
