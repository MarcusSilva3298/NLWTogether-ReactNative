import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { GuildProps } from '../../components/Appointment'
import { Guild } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Load'
import { api } from '../../services/api'

import { styles } from './style'

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
  // const guilds = [
  //   {
  //     id: '1',
  //     name: 'Lendários',
  //     icon: null,
  //     owner: true
  //   },
  //   {
  //     id: '2',
  //     name: 'Legendários',
  //     icon: null,
  //     owner: false
  //   },
  //   {
  //     id: '3',
  //     name: 'SledgHammer',
  //     icon: null,
  //     owner: false
  //   },

  //   {
  //     id: '4',
  //     name: 'Sleeping Lotus',
  //     icon: null,
  //     owner: false
  //   },
  //   {
  //     id: '5',
  //     name: 'Premier',
  //     icon: null,
  //     owner: false
  //   },
  //   {
  //     id: '6',
  //     name: 'Wind',
  //     icon: null,
  //     owner: false
  //   },
  //   {
  //     id: '7',
  //     name: 'M1R4',
  //     icon: null,
  //     owner: false
  //   }
  // ]

  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds')

    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGuilds()
  })

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)} />
          )}
          contentContainerStyle={{ paddingBottom: 35 }}
          ItemSeparatorComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          style={styles.guilds}
        />
      )}
    </View>
  )
}
