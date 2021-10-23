import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { styles } from './styles'
import { Message, MessageProps } from '../Message'
import { api } from '../../services/api';

export function MessageList() {
const [currentMessages, seCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>('/messages/last3');
      seCurrentMessages(messagesResponse.data);
    }
    fetchMessages();
  })

  return (
    <ScrollView 
      style={ styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message, index) => <Message key={message.id + index} data={message} /> )}
    </ScrollView>
  )
}
