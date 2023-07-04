/* eslint-disable prettier/prettier */
import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#8E443D",
  },
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  input: {
    flex: 0.95,
    paddingHorizontal: 6,
    borderRadius: 8,
    backgroundColor: "#FBFFF1",
  },
  textItemList: {
    fontSize: 18,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#EFD28D",
    borderRadius: 4,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 30,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 800,
  },
  modalDetailContainer: {
    paddingVertical: 18,
  },
  modalDetailText: {
    fontSize: 14,
    color: "#212121",
  },
  modalItemText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 600,
    paddingVertical: 12,
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
