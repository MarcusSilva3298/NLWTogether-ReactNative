import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

interface Props {
  isCentered?: boolean
}

export function ListDivider({ isCentered = false }: Props) {
  return (
    <View
      style={[
        styles.container,
        isCentered === true ? { width: '74%' } : { width: '78%' }
      ]}
    />
  )
}
