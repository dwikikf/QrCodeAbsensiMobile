import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface CardProps {
  children?: ReactNode;
  width: DimensionValue;
  height: DimensionValue;
  style?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({ children, width, height, style }) => {
  return (
    <View style={[styles.container, { width: width, height: height }, style]}>
      <LinearGradient
        colors={["#f7ecef", "#ecdde2", "#e9d6db"]}
        style={styles.gradient}
      >
        <FontAwesome6
          style={styles.cardHeader}
          name="arrow-up-right-from-square"
          size={16}
          color="#F7A8E8"
        />
      </LinearGradient>
      <BlurView intensity={30} tint="light" style={styles.blur} />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)", // Efek kaca
    shadowColor: "#fff", // Efek kilau
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject, // Agar gradient memenuhi parent
  },
  blur: {
    flex: 1,
    padding: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "absolute", // Pastikan konten ada di atas BlurView
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardHeader: {
    alignSelf: "flex-end",
    position: "absolute",
    top: 10,
    right: 20,
  },
});

export default Card;
