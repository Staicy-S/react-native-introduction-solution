import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, Touchable, View } from "react-native";

export default function App() {
  console.log("Render App");
  const [color, setColor] = useState("white");
  const [button1, setButton1] = useState("white");
  const [button2, setButton2] = useState("white");
  const [button3, setButton3] = useState("white");

  const [clicksIndex, setClicksIndex] = useState(0);
  function changeColor(color, buttonIndex) {
    if (buttonIndex === 1) {
      setButton1("red");
    } else if (buttonIndex === 2) {
      setButton2("blue");
    } else if (buttonIndex === 3) {
      setButton3("green");
    }

    setClicksIndex(clicksIndex + 1);
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          changeColor("red", 1);
        }}
        style={{
          backgroundColor: button1,
          flex: 0.3,
        }}
      >
        <Text>Test 1</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          changeColor("blue", 2);
        }}
        style={{
          backgroundColor: button2,
          flex: 0.3,
          border: "1px solid black",
        }}
      >
        <Text style={styles.Text}>Test 2</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          changeColor("green", 3);
        }}
        style={{ backgroundColor: button3, flex: 0.3 }}
      >
        <Text>Test 3</Text>
      </Pressable>
      <StatusBar style="auto" />
      <View>
        <Text>Click Counter: {clicksIndex}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //nimmt den ganzen Bildschirm ein
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "center",
  },
  Text: {
    textAlign: "center",
  },
});
