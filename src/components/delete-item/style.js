import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
