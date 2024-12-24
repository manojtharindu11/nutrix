import FormProvider from "@/services/form-context";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    SpaceMonoRegular: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <FormProvider>
        <StatusBar barStyle="dark-content" />
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
      </FormProvider>
    </TouchableWithoutFeedback>
  );
}
