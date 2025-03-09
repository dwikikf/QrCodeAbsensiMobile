import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f46688",
        tabBarInactiveTintColor: "#5F5F5F",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="absensi"
        options={{
          title: "Absensi",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="book" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="laporan"
        options={{
          title: "Laporan",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="bar-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Tentang",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={25} name="info" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
