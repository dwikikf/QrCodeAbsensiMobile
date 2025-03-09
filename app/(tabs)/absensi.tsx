import { useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Card from "../components/Card";
export default function AbsensiScreen() {
  const today = new Date().toISOString().split("T")[0];
  const [tanggal, setTanggal] = useState(today);
  const [nis, setNis] = useState<string>("");
  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <Card width={width - 20} height={300} style={{ marginTop: 20 }}>
        <Text style={styles.title}>Absensi Siswa</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.labelInput}>Tanggal</Text>
          <TextInput style={styles.input} value={tanggal} editable={false} />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.labelInput}>Nis</Text>
          <TextInput
            style={styles.input}
            value={nis}
            placeholder="Ini Akan Berisi Nis Hasil QR"
          />
        </View>
        <View style={styles.inputGroup}></View>
        <View style={styles.inputGroup}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "#3700b3" : "#6200ee",
                paddingVertical: 12,
                paddingHorizontal: 24,
                borderRadius: 8,
              },
            ]}
            onPress={() => alert("Tombol Ditekan!")}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Klik Saya
            </Text>
          </Pressable>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fbfafa",
  },
  title: {
    fontWeight: 600,
    fontSize: 25,
    alignSelf: "center",
    marginBottom: 20,
  },
  inputGroup: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    // backgroundColor: "#FFF",
  },
  labelInput: {
    minWidth: 60,
    maxWidth: 60,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
  },
});
