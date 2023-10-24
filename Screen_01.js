import React ,{useState} from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text, TextInput, Pressable } from "react-native";

export default function Screen_01({ navigation }) {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  function checkLogin(){
    if(email == "admin" && password == "admin"){
      navigation.navigate("Screen_02")}
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("./assets/Data/icon.png")}
          style={styles.icon}
          resizeMethod="contain"
        />
        <Text style={{ fontSize: 35, fontWeight: "bold", marginTop: 15 }}>
          Hello Again!
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 20, marginTop: 5 }}>
          Log into your account
        </Text>
      </View>
      <View style={styles.center}>
        <View style={styles.imput}>
          <Image
            source={require("./assets/Data/Vector.png")}
            style={{ width: 20, height: 15, marginLeft: 10 }}
            resizeMethod="contain"
          />
          <TextInput
            placeholder="Enter your email address"
            style={{
              flex: 1,
              fontSize: 17,
              paddingHorizontal: 10,
              paddingVertical: 12,
            }}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.imput}>
          <Image
            source={require("./assets/Data/lock.png")}
            style={{ width: 20, height: 15, marginLeft: 10 }}
            resizeMethod="contain"
          />
          <TextInput
            placeholder="Enetr your password"
            style={{
              flex: 1,
              fontSize: 17,
              paddingHorizontal: 5,
              paddingVertical: 12,
            }}
            onChangeText={setPassword}
          />
          <Image
            source={require("./assets/Data/eye.png")}
            style={{ width: 20, height: 15, marginRight: 10 }}
            resizeMethod="contain"
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
          <Pressable>
            <Text style={{ color: "blue" }}>Forgot Password?</Text>
          </Pressable>
        </View>
        <Pressable
          style={{
            backgroundColor: "blue",
            paddingVertical: 12,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={()=>checkLogin()}
        >
          <Text style={{ fontSize: 17, color: "white" }}>Continue</Text>
        </Pressable>
      </View>
      <View style={styles.bottom}>
        <Pressable style={{marginHorizontal: 2}}>
          <Image
            source={require("./assets/Data/google.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable style={{marginHorizontal: 2}}>
          <Image
            source={require("./assets/Data/face.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable style={{marginHorizontal: 2}}>
          <Image
            source={require("./assets/Data/apple.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  top: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
  },
  center: {
    flex: 2,
    padding: 20,
    justifyContent: "space-evenly",
  },
  imput: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },

  bottom:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
})