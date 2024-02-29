import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  headerImg: {
    height: 40,
    width: 40,
  },
  headerTxt: {
    fontSize: 20,
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  logoContainer: {
    justifyContent: "flex-start",
  },
  headerlogo: {
    height: 40,
    width: 40,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
  },
});
