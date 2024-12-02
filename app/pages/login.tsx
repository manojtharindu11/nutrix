import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../components/primary-button";

const LoginScreen = () => {
  return (
    <View>
      {/* <Text>LoginScreen</Text> */}
      <PrimaryButton title="Login" onPress={() => console.log("hi")} />
    </View>
  );
};

export default LoginScreen;
