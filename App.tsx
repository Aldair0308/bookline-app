import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { ThemeProvider } from "./src/hooks/ThemeProvider";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>BookLine:)</Text>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
