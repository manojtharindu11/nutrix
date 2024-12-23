import { Link } from "expo-router";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import FormProvider from "./services/form-context";

export default function Index() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <FormProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Text>This is starting page</Text>
          <Link href={"/pages/home"}>Home</Link>
          <Link href={"/pages/login"}>Login</Link>
          <Link href={"/pages/register"}>Register</Link>
        </SafeAreaView>
      </FormProvider>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
