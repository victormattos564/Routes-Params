import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title'

export default function Profile({route}) {
  const {user} = route.params
  
  return (
    <View style={styles.container}>
      <Title title={"Profile  - 👌"} />
      <Text style={styles.text}>{user.name}</Text>
      <Text style={styles.text}>{user.email}</Text> 
      <Text style={styles.text}>{user.age}</Text>
    </View>
  )
}