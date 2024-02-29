import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: 50,
    backgroundColor: "#c4c5de",
  },
  headerImg: {
    height: 40,
    width: 40,
  },
  headerTxt: {
    fontSize: 20,
    marginHorizontal: 20,
    paddingTop: 10,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    justifyContent: "flex-start",
  },
  headerlogo: {
    height: 50,
    width: 50,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
});
