import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";
import { Message, MessageProps } from "../Message";
import { api } from "../../services/api";
import { io } from "socket.io-client";
import { MESSAGES_EXAMPLE } from '../../utils/messages';

let messagesQueue: MessageProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (newMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [currentMessages, seCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messagesResponse = await api.get<MessageProps[]>("/messages/last3");
      seCurrentMessages(messagesResponse.data);
    }
    fetchMessages();
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        seCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]]);
        messagesQueue.shift();
      }
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >
      {currentMessages.map((message, index) => (
        <Message key={message.id + index} data={message} />
      ))}
    </ScrollView>
  );
}
