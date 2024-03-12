import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    flex: 1,
  },
  containerCard: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderBottomWidth: 5,
    borderBottomColor: "#d07028",
    marginVertical: 5,
  },
  textContainer: { paddingLeft: 20 },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#593a7b",
  },
  icon: {
    height: 80,
    width: 80,
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    paddingRight: 30,
    fontSize: 15,
  },
  time: {
    marginLeft: 20,
    justifyContent: "flex-end",
    fontSize: 15,
  },
  locationContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  location: {
    paddingRight: 30,
    fontSize: 15,
  },
  players: {
    fontSize: 15,
  },
});
