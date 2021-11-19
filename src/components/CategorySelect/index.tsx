import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { categories } from '../../utils/categories'
import { Category } from '../Category'

import { styles } from './styles'

type Props = {
  categorySelected: string
  setCategory: (category_id: string) => void
  check_box?: boolean
}

export function CategorySelect({
  categorySelected,
  setCategory,
  check_box
}: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => setCategory(category.id)}
            check_box={check_box}
          />
        )
      })}
    </ScrollView>
  )
}
