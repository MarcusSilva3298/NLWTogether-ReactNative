import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

interface Props {
  width?: string
}

export function ListDivider({ width = '0' }: Props) {
  return (
    <View
      style={[styles.container, width === '0' ? { width: '74%' } : { width }]}
    />
  )
}
