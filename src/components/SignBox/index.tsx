import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../../theme";
import { Button } from "../Button";
import { styles } from "./styles";

export function SignBox() {
  return (
    <View style={styles.container}>
      <Button 
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
    </View>
  );
}
