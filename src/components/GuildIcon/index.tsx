import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './styles'

export function GuildIcon() {
  const uri =
    'https://i.pinimg.com/564x/b8/52/5c/b8525c0627e8da7f96b4a3153e48e7fa.jpg'

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />
}
