import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title'
import { user } from '../../data/Category'
export default function Category({route}) {
  const {user} = route.params
  return (
    <View style={styles.container}>
      <Title title={"Category - 👍"} />
      <Text style={styles.text}>{user.name}</Text>
      <Text style={styles.text}>{user.email}</Text> 
      <Text style={styles.text}>{user.age}</Text>
    </View>
  )
}