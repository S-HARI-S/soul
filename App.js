import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import Chat from "./src/chat";
import PinnedChats from "./src/pinnedChats/round";
import Octagon from "./src/pinnedChats/flower";
import Rectangle from "./src/pinnedChats/reactangle";
import BottomDraw from "./src/bottomDraw";



export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{width:"100%",justifyContent:"space-evenly", alignItems:"center", height:500}} >
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PinnedChats />
        <PinnedChats />
      </View>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PinnedChats />
        <Octagon size={130} color={"#fff"} />
      </View>
      <Rectangle />
      </View>

      <Chat
        message={{
          name: "Robert Jack",
          subtext: "It came to my notice that, you arent...",
        }}
        newMessage={false}
        notif={{
          newMessageTime: "4:30pm",
          default: "Yesterday",
          incoming: false,
        }}
      />
      <Chat
        message={{
          name: "Rahul",
          subtext: "Hey wassup? I was wondering if you could ..",
        }}
        newMessage={false}
        notif={{
          newMessageTime: "4:30pm",
          default: "Yesterday",
          incoming: false,
        }}
      />
      <Chat
        message={{ name: "Robert Jack", subtext: "lol that;s just insane" }}
        newMessage={true}
        notif={{
          newMessageTime: "4:30pm",
          default: "Yesterday",
          incoming: true,
        }}
      />
      <Chat
        message={{ name: "Robert Jack", subtext: "sup bro?" }}
        newMessage={true}
        notif={{
          newMessageTime: "11:00am",
          default: "Yesterday",
          incoming: true,
        }}
      />

     {/* < BottomDraw /> */}
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
