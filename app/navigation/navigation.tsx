import { Stack } from "expo-router";
import { FormProvider } from "../services/form-context";

export default function Navigation() {

  return (
    <FormProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </FormProvider>
  );
}
