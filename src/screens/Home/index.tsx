import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Appointment } from '../../components/Appointment'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Profile } from '../../components/Profile'

import { styles } from './styles'

export function Home() {
  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '2',
        name: 'Legendários',
        icon: null,
        owner: false
      },
      category: '1',
      date: '23/06 às 20:40h',
      description: 'CSzinho de leve'
    }
  ]

  function handleCategorySelect(category_id: string) {
    category_id === category ? setCategory('') : setCategory(category_id)
  }

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd
          onPress={() => navigation.navigate('AppointmentCreate' as never)}
        />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={() => navigation.navigate('AppointmentDetails' as never)}
            />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </View>
  )
}
