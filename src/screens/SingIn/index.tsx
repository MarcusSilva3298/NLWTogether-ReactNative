import React from 'react'
import { Text, Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from '../../components/ButtonIcon'

import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { useAuth } from '../../hooks/auth'

export function SingIn() {
  const navigation = useNavigation()
  const { user } = useAuth()

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conect-se{'\n'}e organize suas{'\n'}jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home' as never)}
        />
      </View>
    </View>
  )
}
