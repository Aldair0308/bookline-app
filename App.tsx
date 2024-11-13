import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "./src/hooks/ThemeProvider";
import BottomNavigation from "./src/navigation/BottomNavigation";
import { NavigationContainer } from "@react-navigation/native"; // Asegúrate de importar esto

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <View style={{ flex: 1 }}>
          <BottomNavigation />
        </View>
      </ThemeProvider>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
