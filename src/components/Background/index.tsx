import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './style'
import { theme } from '../../global/styles/theme'

type Proprs = {
  children: ReactNode
}

export function Background({ children }: Proprs) {
  const { secondary80, secondary100, primary } = theme.colors

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  )
}
