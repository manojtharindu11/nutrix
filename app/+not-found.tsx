import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found." }} />
      <View>
        <Link href={"/home"}>Go back to home Screen</Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
