/* eslint-disable prettier/prettier */
import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#342E37",
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
});
