import React from "react";
import { View } from "react-native";
import { styles } from "./style";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SignBox } from "../../components/SignBox";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      <SignBox />
    </View>
  );
}
