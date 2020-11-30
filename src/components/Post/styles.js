import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 25,
  },
  video: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  uiContainer: {
    height: "100%",
    justifyContent: "flex-end",
  },
  rightContainer: {
    alignSelf: "flex-end",
    height: 250,
    justifyContent: "space-between",
    marginRight: 5,
  },
  bottomContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  handle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  description: {
    color: "#c3c4c7",
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 10,
  },
  songRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  songname: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  profilePictureImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
  },
  statsLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 2,
  },
  iconContainer: {
    alignItems: "center",
  },
  songImage: {
    height: 45,
    width: 45,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#878787",
  },
});

export default styles;
