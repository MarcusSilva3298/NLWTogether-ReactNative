import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Appointment, AppointmentProps } from '../../components/Appointment'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Load } from '../../components/Load'
import { Profile } from '../../components/Profile'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'

import { styles } from './styles'

export function Home() {
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [appointments, setAppoitnemnts] = useState<AppointmentProps[]>([])

  const navigation = useNavigation()

  function handleCategorySelect(category_id: string) {
    category_id === category ? setCategory('') : setCategory(category_id)
  }

  async function loadAppointments() {
    setLoading(true)
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const data: AppointmentProps[] = storage ? JSON.parse(storage) : []

    if (category) {
      setAppoitnemnts(data.filter((item) => item.category === category))
    } else {
      setAppoitnemnts(data)
    }

    setLoading(false)
  }

  function handleGuild(item: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { item })
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments()
    }, [category])
  )

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
        {loading ? (
          <Load />
        ) : (
          <>
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
                <Appointment data={item} onPress={() => handleGuild(item)} />
              )}
              contentContainerStyle={{ paddingBottom: 35 }}
              style={styles.matches}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <ListDivider width="78%" />}
            />
          </>
        )}
      </View>
    </Background>
  )
}
