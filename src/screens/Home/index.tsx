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
      category: '2',
      date: '23/06 às 20:40h',
      description: 'CSzinho de leve'
    },
    {
      id: '3',
      guild: {
        id: '3',
        name: 'SledgHammer',
        icon: null,
        owner: false
      },
      category: '3',
      date: '24/06 às 23:40h',
      description: 'Hammerizou'
    },
    {
      id: '4',
      guild: {
        id: '4',
        name: 'Sleeping Lotus',
        icon: null,
        owner: false
      },
      category: '1',
      date: '01/07 às 20:00h',
      description: 'Best internacional clan'
    },
    {
      id: '5',
      guild: {
        id: '5',
        name: 'Premier',
        icon: null,
        owner: false
      },
      category: '1',
      date: '30/06 às 22:40h',
      description: 'MDChefe pae'
    },
    {
      id: '6',
      guild: {
        id: '6',
        name: 'Wind',
        icon: null,
        owner: false
      },
      category: '3',
      date: '32/06 às 20:40h',
      description: 'Wind of Change'
    },
    {
      id: '7',
      guild: {
        id: '7',
        name: 'M1R4',
        icon: null,
        owner: false
      },
      category: '4',
      date: '19/06 às 21:40h',
      description: 'Farm de Dr4c0s'
    }
  ]

  function handleCategorySelect(category_id: string) {
    category_id === category ? setCategory('') : setCategory(category_id)
  }

  const navigation = useNavigation()

  return (
    <Background>
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
          <ListHeader
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />
        </View>

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={() => navigation.navigate('AppointmentDetails' as never)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 35 }}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </Background>
  )
}
