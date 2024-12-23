import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import PrimaryButton from "../components/primary-button";
import commonStyles from "../common/common-styles";
import { Image } from "react-native";
import { useFormContext } from "../services/form-context";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [loading, setLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { formData, updateFormData } = useFormContext();

  useEffect(() => {
    const isFormValid =
      name.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      !nameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError;

    setIsButtonDisabled(!isFormValid);
  }, [
    name,
    email,
    password,
    confirmPassword,
    nameError,
    emailError,
    passwordError,
    confirmPasswordError,
  ]);

  // Real-time validation functions
  const validateName = (text: string) => {
    setName(text);
    setNameError(text.trim() ? "" : "Name is required.");
  };

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
    // setConfirmPasswordError(text === text ? "" : "Passwords do not match.");
  };

  const validateConfirmPassword = (text: string) => {
    setConfirmPassword(text);
    // setConfirmPasswordError(text === password ? "" : "Passwords do not match.");
  };

  const handleSignup = () => {
    Keyboard.dismiss();
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      nameError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      Alert.alert("Validation Error", "Please fix all validation errors.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const newFormData = { name, email, password };
      updateFormData(newFormData);
      console.log("Form data:", newFormData);
      setLoading(false);
      Alert.alert("Success", "You have successfully signed up!");
      routeToLogin();
    }, 3000);
  };

  const routeToLogin = () => {
    // Navigate to login page
    setTimeout(() => {
      console.log("Navigating to login page...");
      navigation.navigate("login" as never);
    }, 2000);
  };

  const togglePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState);

  return (
    <View>
      <View style={styles.backgroundImage}>
        <Image
          source={require("../assets/images/vegetables.png")}
          style={{ width: "100%", height: 100, resizeMode: "cover" }}
        />
        <Text style={[commonStyles.title, { backgroundColor: "#323f22" }]}>
          Nutrix
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.formContainer}>
          <Text style={commonStyles.heading}>Glad to have you here! 😊</Text>
          <Text style={commonStyles.subHeading}>
            Enter your credentials to create an account
          </Text>

          <TextInput
            style={commonStyles.input}
            placeholder="Name"
            keyboardType="default"
            value={name}
            onChangeText={validateName}
          />
          {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

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

          {/* Password Field */}
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

          {/* Confirm Password Field */}
          <View style={commonStyles.passwordContainer}>
            <TextInput
              style={[commonStyles.input, { flex: 1 }]}
              placeholder="Confirm Password"
              secureTextEntry={!isPasswordVisible}
              value={confirmPassword}
              onChangeText={validateConfirmPassword}
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
          {confirmPasswordError ? (
            <Text style={styles.errorText}>{confirmPasswordError}</Text>
          ) : null}

          <PrimaryButton
            loading={loading}
            isDisabled={isButtonDisabled}
            title="Sign up"
            onPress={handleSignup}
          />

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Do you have an account? </Text>
            <Link href="/login">
              <Text style={styles.loginLink}>Login</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
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
    overflow: "hidden",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
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

export default RegisterScreen;
