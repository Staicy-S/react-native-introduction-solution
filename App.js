import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("Render App");
  const [button1, setButton1] = useState("white");
  const [button2, setButton2] = useState("white");
  const [button3, setButton3] = useState("white");

  const [clicksIndex, setClicksIndex] = useState(0);
  function changeColor(color, buttonIndex) {
    if (buttonIndex === 1) {
      setButton1(color);
    } else if (buttonIndex === 2) {
      setButton2(color);
    } else if (buttonIndex === 3) {
      setButton3(color);
    }

    setClicksIndex((prevCount) => prevCount + 1);
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          console.log("First button is pressed");
          changeColor("red", 1);
        }}
        onPressIn={() => {
          console.log("On Press In");
        }}
        onLongPress={() => {
          console.log("On Long Press");
        }}
        onPressOut={() => {
          console.log("On Press Out");
        }}
        style={{
          backgroundColor: button1,
          flex: 0.3,
          borderWidth: 5,
          borderColor: "black",
          justifyContent: "center",
        }}
      >
        <Text style={styles.text}>Test 1</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          changeColor("blue", 2);
        }}
        style={[
          {
            backgroundColor: button2,
          },
          styles.colorButtons,
        ]}
      >
        <Text style={styles.text}>Test 2</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          changeColor("green", 3);
        }}
        style={[
          {
            backgroundColor: button3,
          },
          styles.colorButtons,
        ]}
      >
        <Text style={styles.text}>Test 3</Text>
      </Pressable>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.text}>Click Counter: {clicksIndex}</Text>
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
    gap: 10,
    padding: 10,
  },
  colorButtons: {
    flex: 0.3,
    borderWidth: 5,
    borderColor: "black",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 32,
  },
});
