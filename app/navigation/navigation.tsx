import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { FormProvider } from "../services/form-context";
import Toast from "react-native-toast-message";

export default function Navigation() {
  const router = useRouter();

  useEffect(() => {
    // Example of triggering a toast when the component mounts (you can remove this once you test)
    Toast.show({
      type: "success",
      text1: "Toast Initialized",
      text2: "This is a test message!",
    });
  }, []);

  return (
    <FormProvider>
      <Stack>
        <Toast />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </FormProvider>
  );
}
