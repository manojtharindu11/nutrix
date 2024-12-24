import React from "react";
import RegisterScreen from "./register";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RegisterScreen />
    </SafeAreaView>
  );
};

export default Index;
