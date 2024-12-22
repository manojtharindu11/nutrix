import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/primary-button";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  let [fontsLoaded] = useFonts({
    SpaceMonoRegular: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const handleLogging = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("success", "You have successfully logged in!");
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require("../../assets/images/nutrix-background.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Text style={styles.title}>Nutrix</Text>
      </ImageBackground>

      <View style={styles.formContainer}>
        <Text style={styles.heading}>Let’s Connect With Us!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <View>
          <PrimaryButton
            loading={loading}
            title="Login"
            onPress={handleLogging}
          />
        </View>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <TouchableOpacity>
            <Link href={"/pages/register"}>
              <Text style={styles.signupLink}>Sign up</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 16 / 9,
    overflow: "hidden",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    color: "black",
  },
  title: {
    color: "white",
    fontSize: 56,
    fontFamily: "SpaceMonoRegular",
    textAlign: "center",
    marginHorizontal: 16,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    padding: 8,
  },
  formContainer: {
    flex: 1,
    padding: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  eyeIcon: {
    paddingHorizontal: 8,
    position: "absolute",
    right: 10,
    top: 14,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: "#007BFF",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    fontSize: 16,
  },
  signupLink: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default LoginScreen;
