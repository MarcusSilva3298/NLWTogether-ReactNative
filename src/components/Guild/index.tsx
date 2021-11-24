import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import { theme } from '../../global/styles/theme'
import { GuildIcon } from '../GuildIcon'
import { styles } from './style'

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps
}

export function Guild({ data, ...rest }: Props) {
  const { secondary50, secondary70 } = theme.colors

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <LinearGradient
        style={styles.guildIcon}
        colors={[secondary50, secondary70]}
      >
        <GuildIcon guildId={data.id} iconId={data.icon} />
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.title}>{data.name}</Text>

        <Text style={styles.type}>
          {data.owner ? 'Administrador' : 'Convidado'}
        </Text>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} syze={24} />
    </TouchableOpacity>
  )
}
