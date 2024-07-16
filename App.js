import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("Render App");

  // Array to hold the color states of the buttons
  const [buttonColors, setButtonColors] = useState(["white", "white", "white"]);

  const [clicksIndex, setClicksIndex] = useState(0);

  function changeColor(color, buttonIndex) {
    setButtonColors((prevColors) => {
      const newColors = [...prevColors];
      if (buttonIndex === 1) {
        newColors[0] = "red";
      } else if (buttonIndex === 2) {
        newColors[1] = "blue";
      } else if (buttonIndex === 3) {
        newColors[2] = "green";
      }
      return newColors;
    });

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
          backgroundColor: buttonColors[0],
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
            backgroundColor: buttonColors[1],
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
            backgroundColor: buttonColors[2],
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
