import { StatusBar } from "expo-status-bar";
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const width = Dimensions.get("window").height / 4 - 5;

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={{ ...styles.box, ...styles.red, width }}>
          <Text style={styles.text}>{width}</Text>
        </View>
        <View style={{ ...styles.box, ...styles.orange, width }}>
          <Text style={styles.text}>{width}</Text>
        </View>
        <View style={{ ...styles.box, ...styles.green, width }}>
          <Text style={styles.text}>{width}</Text>
        </View>
        <View style={{ ...styles.box, ...styles.green, width }}>
          <Text style={styles.text}>{width}</Text>
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
    // flexWrap: "wrap",
    gap: 4,
    // rowGap: 5,
    height: 600,
  },
  box: {
    height: 100,
    padding: 5,
    flexBasis: 100,
  },
  green: { backgroundColor: "green", flexGrow: 1 },
  red: { backgroundColor: "red", flexShrink: 1 },
  orange: { backgroundColor: "orange", flexShrink: 1 },
  pink: { backgroundColor: "pink" },
});
