import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Alert,
  Platform,
  ToastAndroid,
} from "react-native";
import { Input } from "./shared/Input";
import { Colors, FontSize, Gaps } from "./shared/tokens";
import { Button } from "./shared/Button";
import { ErrorNotification } from "./shared/ErrorNotification";
import { useState } from "react";

export default function App() {
  const [error, setError] = useState<string | undefined>();
  const width = Dimensions.get("window").height / 4 - 5;

  const alert = () => {
    setError("Неверный логин или пароль");

    // if (Platform.OS === "android") {
    //   ToastAndroid.showWithGravity(
    //     "Неверный логин или пароль",
    //     ToastAndroid.SHORT,
    //     ToastAndroid.TOP
    //   );
    // } else {
    //   Alert.alert("Ошибка!", "Неверный логин или пароль", [
    //     {
    //       text: "Неплохо",
    //       style: "default",
    //       onPress: () => {},
    //     },
    //     {
    //       text: "Плохо",
    //       style: "cancel",
    //       onPress: () => {},
    //     },
    //     {
    //       text: "Всё равно",
    //       style: "destructive",
    //       onPress: () => {},
    //     },
    //   ]);
    // }
  };

  return (
    <View style={styles.container}>
      <ErrorNotification error={error} />
      <View style={styles.content}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input isPassword placeholder="Пароль" />
          <Button text="Войти" onPress={alert} />
        </View>
        <Text style={styles.link}>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 35,
    flex: 1,
    backgroundColor: Colors.Black,
  },
  content: { justifyContent: "center", alignItems: "center", gap: Gaps._50 },
  form: { alignSelf: "stretch", gap: Gaps._16 },

  logo: {
    width: 200,
  },

  link: {
    color: Colors.Links,
    fontSize: FontSize._18,
  },
});
