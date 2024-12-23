import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/primary-button";
import { Link, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import commonStyles from "../common/common-styles";
import { useFormContext } from "../services/form-context";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { formData } = useFormContext();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    SpaceMonoRegular: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    const isFormValid =
      email.trim() && password.trim() && !emailError && !passwordError;
    setIsButtonDisabled(!isFormValid);
  }, [email, password, emailError, passwordError]);

  const validateEmail = (text: string) => {
    setEmail(text);
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    setEmailError(text.trim() ? "" : "Email is required.");
    if (!text.trim()) return;
    setEmailError(emailRegex.test(text) ? "" : "Enter a valid email address.");
  };

  const validatePassword = (text: string) => {
    setPassword(text);
    // setPasswordError(text.trim() ? "" : "Password is required.");
    // if (!text.trim()) return;
    // setPasswordError(
    //   text.length >= 6 ? "" : "Password must be at least 6 characters long."
    // );
  };

  const handleLogging = () => {
    Keyboard.dismiss();
    if (!email.trim() || !password.trim() || emailError || passwordError) {
      Alert.alert("Validation Error", "Please fix all validation errors.");
      return;
    }
    setLoading(true);
    console.log(formData.email, formData.password);
    console.log(email, password);
    setTimeout(() => {
      if (!authenticateUser()) {
        setLoading(false);
        setEmail("");
        setPassword("");
        return;
      }
      setLoading(false);
      Alert.alert("success", "You have successfully logged in!");
      routeToHomePage();
    }, 3000);
  };

  const authenticateUser = () => {
    if (formData.email === email && formData.password === password) {
      return true;
    } else {
      Alert.alert(
        "Invalid Credentials",
        "Please enter valid email and password."
      );
    }
  };

  const routeToHomePage = () => {
    // Navigate to login page
    setTimeout(() => {
      console.log("Navigating to home page...");
      navigation.navigate("home" as never);
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={commonStyles.container}>
        <ImageBackground
          source={require("../assets/images/nutrix-background.jpg")}
          style={commonStyles.backgroundImage}
          resizeMode="cover"
        >
          <Text style={commonStyles.title}>Nutrix</Text>
        </ImageBackground>

        <View style={commonStyles.formContainer}>
          <Text style={commonStyles.heading}>Let’s Connect With Us!</Text>

          <TextInput
            textContentType="emailAddress"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="done"
            style={commonStyles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            value={email}
            onChangeText={validateEmail}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}

          <View style={commonStyles.passwordContainer}>
            <TextInput
              style={[commonStyles.input, { flex: 1 }]}
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={validatePassword}
            />
            <TouchableOpacity
              style={commonStyles.eyeIcon}
              onPress={togglePasswordVisibility}
            >
              <Ionicons
                name={isPasswordVisible ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}

          <TouchableOpacity
            style={commonStyles.forgotPassword}
            onPress={() => {
              Alert.alert(
                "Forgot Password",
                "We are still working on that feature. Please try again later."
              );
            }}
          >
            <Text style={commonStyles.forgotPasswordText}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <View>
            <PrimaryButton
              loading={loading}
              title="Login"
              onPress={handleLogging}
              isDisabled={isButtonDisabled}
            />
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don’t have an account? </Text>
            <TouchableOpacity>
              <Link href={"/register"}>
                <Text style={styles.signupLink}>Sign up</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default LoginScreen;
