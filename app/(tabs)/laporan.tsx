import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function LaporanScreen() {
  return (
    <View>
      <Text>Ini Laporan Screen</Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
}
