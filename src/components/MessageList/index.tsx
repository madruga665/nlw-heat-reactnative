import React from 'react'
import { ScrollView, Text } from 'react-native'
import { styles } from './styles'
import { Message } from '../Message'

export function MessageList() {
  const message = {
    id: '1',
    text: 'Vamo com tudoooooooo',
    user: {
      name: 'madruga665',
      avatar_url: 'https://github.com/madruga665.png',
    },
  }
  return (
    <ScrollView 
      style={ styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  )
}
