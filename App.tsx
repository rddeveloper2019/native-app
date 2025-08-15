import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={{ ...styles.box, ...styles.red }}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={{ ...styles.box, ...styles.orange }}>
          <Text style={styles.text}>20000000</Text>
        </View>
        <View style={{ ...styles.box, ...styles.green }}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={{ ...styles.box, ...styles.green }}>
          <Text style={styles.text}>3</Text>
        </View>
        <View style={{ ...styles.box, ...styles.green }}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "yellow",

    height: 600,
  },
  box: {
    // width: 100,
    height: 100,
    padding: 5,
    // flexBasis: 100,
  },
  green: { backgroundColor: "green", flexGrow: 1 },
  red: { backgroundColor: "red", flexShrink: 1 },
  orange: { backgroundColor: "orange", flexShrink: 1 },
  pink: { backgroundColor: "pink" },
});
