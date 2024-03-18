import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";

export default function Chat() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.individualchats}>
        <View style={styles.profilePicture}></View>
        <View style={{ width:"100%", height:50}}>
          <View style={styles.textContent}> 
          <Text style={styles.titleTexts}>Robert jack</Text>
          <Text style={styles.notificationText}>4:15pm</Text>
          </View>
          <View style={styles.textContent}>
          <Text style={styles.subTexts}>tf bitch im not gay you are lol...</Text>
          <View style={styles.notificationCircle}>
            <Text style={{fontFamily:"Roboto", fontSize:10, fontWeight:900}}>1</Text>
          </View>
          </View>
          
        </View>
      </View>

      
      
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
  individualchats: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    marginVertical:10,
    // borderColor: "#fff",
    width: "100%",
    height: 64, 
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
    width:"80%",
    flex: 1,
    justifyContent:"space-between",
    flexDirection:"row",
  },
  titleTexts: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  subTexts:{
    color:"#7B7B7B",
    fontFamily:"Roboto"
  },
  notificationText:{
    color: "#F1E5FF",
    fontSize:12,
    fontWeight:"700"
  },
  notificationCircle:{
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    height:17,
    width:17,
    backgroundColor: "#F1E5FF",
    color:"#000"
  }
});
