import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Colors, FontSize } from "./tokens";

export const ErrorNotification = ({ error }: { error?: string }) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (error) {
      setShown(true);

      timeout = setTimeout(() => {
        clearTimeout(timeout);
        setShown(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  if (!shown) {
    return <></>;
  }

  return (
    <View style={styles.errorBox}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorBox: {
    position: "absolute",
    top: 50,
    width: Dimensions.get("screen").width,
    backgroundColor: Colors.Red,

    padding: 16,
  },
  error: {
    fontSize: FontSize._16,
    color: Colors.White,
    textAlign: "center",
  },
});
