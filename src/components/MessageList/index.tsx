import React from 'react'
import { ScrollView, Text } from 'react-native'
import { styles } from './styles'
import { Message } from '../Message'

export function MessageList() {
  return (
    <ScrollView 
      style={ styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message />
      <Message />
      <Message />
    </ScrollView>
  )
}
