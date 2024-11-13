import { StyleSheet } from "react-native";

// Tema Light
export const lightTheme = {
  colors: {
    primary: "#466382", // Azul grisáceo
    text: "#071739", // Azul muy oscuro
    background: "#A485C4", // Morado claro como fondo
    buttonBackground: "#E30300", // Rojo intenso para botones
    buttonText: "white",
    hora: "#A485C4", // Morado claro para hora
  },
  styles: StyleSheet.create({
    container: {
      borderRadius: 10,
      margin: 8,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#A485C4", // Fondo morado claro
    },
    containerSet: {
      width: "90%",
      height: "90%",
      borderRadius: 10,
      margin: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#E30300", // Fondo rojo intenso para contenedores
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#071739", // Azul muy oscuro para texto
    },
    button: {
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      backgroundColor: "#E30300", // Rojo intenso para botones
    },
    buttonText: {
      fontWeight: "bold",
      color: "white",
    },
  }),
};

// Tema Dark
export const darkTheme = {
  colors: {
    primary: "#071739", // Azul muy oscuro
    text: "#A485C4", // Morado claro
    background: "#466382", // Azul grisáceo como fondo oscuro
    buttonBackground: "#E30300", // Rojo intenso para botones
    buttonText: "white",
    hora: "white", // Color blanco para hora
  },
  styles: StyleSheet.create({
    container: {
      borderRadius: 10,
      margin: 8,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#466382", // Azul grisáceo para fondo
    },
    containerSet: {
      width: "90%",
      height: "90%",
      borderRadius: 10,
      margin: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#071739", // Azul muy oscuro para fondo de contenedores
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#A485C4", // Morado claro para texto
    },
    button: {
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      backgroundColor: "#E30300", // Rojo intenso para botones
    },
    buttonText: {
      fontWeight: "bold",
      color: "white",
    },
  }),
};
