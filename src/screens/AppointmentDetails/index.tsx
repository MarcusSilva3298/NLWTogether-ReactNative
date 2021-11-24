import React from 'react'

import { Fontisto } from '@expo/vector-icons'
import { FlatList, ImageBackground, Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { useRoute } from '@react-navigation/native'
import { Background } from '../../components/Background'
import { Header } from '../../components/Header'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import BannerImg from '../../assets/banner.png'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtonIcon'
import { AppointmentProps } from '../../components/Appointment'

interface Params {
  guildSelected: AppointmentProps
}

export function AppointmentDetails() {
  const route = useRoute()
  const { guildSelected } = route.params as Params

  const members = [
    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/rodrigorgtic.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Marcus',
      avatar_url: 'https://avatars.githubusercontent.com/u/47906100?v=4',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle={`Total ${members.length}`} />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider width="82%" />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  )
}
