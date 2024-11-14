import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { ThemeProvider } from "./src/hooks/ThemeProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainStackNavigator from "./src/navigation/StackNavigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <View style={{ flex: 1 }}>
          <MainStackNavigator />
        </View>
      </ThemeProvider>
      <StatusBar style="dark" />
    </GestureHandlerRootView>
  );
}
