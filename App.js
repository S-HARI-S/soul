import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import Chat from "./src/chat";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
  <Chat message = {{name:'Robert Jack', subtext: 'It came to my notice that, you arent...'}} newMessage={false} notif = {{newMessageTime:'4:30pm', default:"Yesterday", incoming:false}} />
  <Chat message = {{name:'Rahul', subtext: 'Hey wassup? I was wondering if you could ..'}} newMessage={false} notif = {{newMessageTime:'4:30pm', default:"Yesterday", incoming:false}} />
  <Chat message = {{name:'Robert Jack', subtext: 'lol that;s just insane'}} newMessage={true} notif = {{newMessageTime:'4:30pm', default:"Yesterday", incoming:true}} />
  <Chat message = {{name:'Robert Jack', subtext: 'sup bro?'}} newMessage={true} notif = {{newMessageTime:'11:00am', default:"Yesterday", incoming:true}} />



  
  </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
})


