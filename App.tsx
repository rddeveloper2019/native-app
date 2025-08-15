import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <Text style={styles.textStyle}>
        Open up App.tsx to start working on your app!!!
      </Text>
      <StatusBar style="auto" />
      <TextInput placeholder="useless placeholder" keyboardType="numeric" />
      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f86af6ff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "green",
    fontSize: 24,
    fontWeight: 500,
  },
});
