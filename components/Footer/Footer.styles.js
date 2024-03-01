import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingBottom: 0,
    height: 50,
    backgroundColor: "#c4c5de",
  },
  midView: {
    backgroundColor: "#d07028",
    flex: 1,
    height: 70,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  iconFooters: {
    paddingTop: 10,
    marginTop: 15,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    bottom: 0,
  },

  footerIcons: {
    height: 40,
    width: 40,
  },
  footerMidIcon: {
    height: 70,
    width: 70,
    marginBottom: 5,
  },
  addIcon: {
    fontSize: 40,
    paddingBottom: 10,
  },
});
