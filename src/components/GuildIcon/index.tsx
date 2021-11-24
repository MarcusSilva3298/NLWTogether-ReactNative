import React from 'react'
import { Image, Text, View } from 'react-native'

import { styles } from './styles'
import DiscordSVG from '../../assets/discord.svg'
import { theme } from '../../global/styles/theme'

const { CDN_IMAGE } = process.env

interface Props {
  guildId: string
  iconId: string | null
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
    <View
      style={[
        styles.container,
        !iconId
          ? { backgroundColor: theme.colors.discord }
          : { backgroundColor: theme.colors.secondary60 }
      ]}
    >
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <DiscordSVG width={40} height={40} />
      )}
    </View>
  )
}
