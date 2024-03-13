import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Title title={"Profile  - 👌"} />
    </View>
  )
}