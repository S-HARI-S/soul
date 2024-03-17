import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.textarea}
        placeholder="Type here to translate!"
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textarea: {
    borderWidth: 5, // No need for "px" here
    borderColor: "#000",
    width: "80%", // Example width
    height: 50,
    padding:7, // Example height
  }
});
