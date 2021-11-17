import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { theme } from '../../global/styles/theme'

import { styles } from './style'

type Props = RectButtonProperties & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
  check_box?: boolean
}

export function Category({
  title,
  icon: Icon,
  checked,
  check_box,
  ...rest
}: Props) {
  const { secondary50, secondary70, secondary75, secondary40 } = theme.colors

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary75 : secondary50, secondary40]}
        >
          {check_box && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}
