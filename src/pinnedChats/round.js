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

export default function PinnedChats() {
  return (
    <TouchableHighlight
      onLongPress={() => {
        Vibration.vibrate(20);
        alert("thyr");
      }}
    >
      <View>
        <Text style={styles.circle}></Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#fff",
    color: "#000",
    height: 151,
    width: 151,
    borderRadius: 100,
  },
});
