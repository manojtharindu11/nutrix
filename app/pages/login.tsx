import { View, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/primary-button";

const LoginScreen = () => {
  let [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
  };

  return (
    <View>
      <Text>LoginScreen</Text>
      <PrimaryButton loading={loading} title="Login" onPress={handleLoading} />
    </View>
  );
};

export default LoginScreen;
