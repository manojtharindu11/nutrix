import { Link } from "expo-router";
import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is starting page</Text>
      <Link href={"/pages/home"}>Home</Link>
      <Link href={"/pages/login"}>Login</Link>
      <Link href={"/pages/register"}>Register</Link>
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
