import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import avatarImg from "../../assets/avatar.png";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme";

const SIZES = {
  SMALL: {
    conatinerSize: 32,
    avatarSize: 28,
  },
  NORMAL: {
    conatinerSize: 48,
    avatarSize: 42,
  },
};

type Props = {
  imageUri: string | undefined;
  sizes?: "SMALL" | "NORMAL";
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

export function UserPhoto({ imageUri, sizes = "NORMAL" }: Props) {
  const { conatinerSize, avatarSize } = SIZES[sizes];
  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8}}
      end={{ x: 0.9, y: 1}}
      style={[
        styles.container,
        {
          width: conatinerSize,
          height: conatinerSize,
          borderRadius: conatinerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || AVATAR_DEFAULT }}
        style={[
          styles.avatar,
          { width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 },
        ]}
      />
    </LinearGradient>
  );
}
