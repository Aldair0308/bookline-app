// HomeScreen.tsx

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { useTheme } from "./../hooks/useTheme"; // Importa el hook useTheme
import ThemeSwitch from "../components/ThemeSwitch";

const HomeScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[theme.styles.container]}>
      <View
        style={[
          theme.styles.containerSet,
          { paddingHorizontal: 20, paddingTop: 20 },
        ]}
      >
        <ThemeSwitch />
      </View>
    </View>
  );
};

export default HomeScreen;
