import { Dimensions, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card width={145} height={150}>
          <FontAwesome name="list-alt" size={25} color="#29284e" />
          <Text style={{ marginTop: 6 }}>Data Siswa</Text>
        </Card>
        <Card width={145} height={150}>
          <FontAwesome name="calendar" size={25} color="#29284e" />
          <Text style={{ marginTop: 6 }}>Data Absensi</Text>
        </Card>
        <Card width={145} height={150}>
          <FontAwesome name="bar-chart" size={25} color="#29284e" />
          <Text style={{ marginTop: 6 }}>Laporan Absensi</Text>
        </Card>
        <Card width={145} height={150}>
          <FontAwesome name="info" size={25} color="#29284e" />
          <Text style={{ marginTop: 6 }}>Bantuan</Text>
        </Card>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");
console.log(width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfafa",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardContainer: {
    maxWidth: width,
    padding: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    // backgroundColor: "#121212",
  },
});
