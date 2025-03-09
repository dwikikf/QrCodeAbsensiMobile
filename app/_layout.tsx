import { FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image, View } from "react-native";

const Logo = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/react-logo.png")}
        style={{ width: 35, height: 35 }}
      />
    </View>
  );
};

const Setting = () => {
  return (
    <View>
      <FontAwesome size={20} name="gear" color="#5F5F5F" />
    </View>
  );
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerTitle: "Al-Hikmah",
          headerTitleAlign: "center",
          headerLeft: () => <Logo />,
          headerRight: () => <Setting />,
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
