import { Link } from "expo-router";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is starting page</Text>
      <Link href={"/home"}>Home</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
