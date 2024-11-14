import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "./src/hooks/ThemeProvider";
import { NavigationContainer } from "@react-navigation/native"; // Asegúrate de importar esto
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DrawerNavigator from "./src/navigation/DrawerNavigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <ThemeProvider>
          <View style={{ flex: 1 }}>
            <DrawerNavigator />
          </View>
        </ThemeProvider>
        <StatusBar style="dark" />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
