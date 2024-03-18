import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  Vibration,
} from "react-native";
import React, { useCallback } from "react";

export default function Chat({ message, notif, newMessage }) {
  return (
    <TouchableHighlight
      onLongPress={() => {
        Vibration.vibrate(20);
        alert("thyr");
      }}
    >
      <View style={styles.individualchats}>
        <View style={styles.profilePicture}></View>
        <View style={{ flex: 1 }}>
          <View style={styles.textContent}>
            <Text style={styles.titleTexts}>{message.name}</Text>
            <Text
              style={
                newMessage
                  ?styles.notificationText 
                  : { color: "#7B7B7B", fontSize: 12, fontWeight: "normal" }
              }
            >
              {newMessage? notif.newMessageTime:notif.default}
            </Text>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.subTexts}>{message.subtext}</Text>
            <View
              style={[
                styles.notificationCircle,
                { display: notif.incoming ? "flex" : "none" },
              ]}
            >
              <Text
                style={{ fontFamily: "Roboto", fontSize: 10, fontWeight: 900 }}
              >
                1
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  individualchats: {
    // backgroundColor:"#fff",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    marginVertical: 10,
    width: "98%",
    // Remove fixed height
  },
  profilePicture: {
    height: 60,
    width: 60,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#fff",
    marginRight: 10,
  },
  textContent: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  titleTexts: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  subTexts: {
    color: "#7B7B7B",
    fontFamily: "Roboto",
  },
  notificationText: {
    color: "#F1E5FF",
    fontSize: 12,
    fontWeight: "700",
  },
  notificationCircle: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: 20,
    backgroundColor: "#F1E5FF",
    color: "#000",
  },
});
