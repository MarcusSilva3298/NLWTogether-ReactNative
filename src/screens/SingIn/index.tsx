import React from 'react'
import { Text, Image, View, Alert, ActivityIndicator } from 'react-native'

import { ButtonIcon } from '../../components/ButtonIcon'

import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'

export function SingIn() {
  const { user, singIn, loading } = useAuth()

  async function handleSingIn() {
    try {
      await singIn()
    } catch (err) {
      Alert.alert(`${err}`)
    }
  }

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

        {loading ? (
          <ActivityIndicator color={theme.colors.primary} />
        ) : (
          <ButtonIcon
            title="Entrar com Discord"
            activeOpacity={0.7}
            onPress={handleSingIn}
          />
        )}
      </View>
    </View>
  )
}
