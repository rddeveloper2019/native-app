import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Input } from "./shared/Input";
import { Colors, FontSize, Gaps } from "./shared/tokens";

export default function App() {
  const width = Dimensions.get("window").height / 4 - 5;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input isPassword placeholder="Пароль" />
          <Button title="Войти" />
        </View>
        <Text style={styles.link}>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 55,
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
