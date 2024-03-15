import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  conView: { backgroundColor: "white", flex: 1 },
  container: { padding: 10, backgroundColor: "white" },
  fullInput: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconStyle: { width: 30, height: 30 },
  dropdownContainer: { width: "45%" },
  twoInputContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  placehoderText: { textAlign: "center" },
  descriptInput: {
    height: 200,
    textAlignVertical: "top",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  subBtn: {
    width: "50%",
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#D07028",
    borderRadius: 10,
  },
  subtext: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  dropdownMenu: {
    borderColor: "transparent",
  },
});
