import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import PrimaryButton from "../components/primary-button";
import commonStyles from "../common/common-styles";
import { Image } from "react-native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Success", "You have successfully signed up!");
    }, 2000);
  };

  const togglePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState);

  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View style={styles.backgroundImage}>
        <Image
          source={require("../../assets/images/vegetables.png")}
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
            onChangeText={setName}
          />

          <TextInput
            style={commonStyles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          {["Password", "Confirm Password"].map((placeholder, index) => (
            <View key={index} style={commonStyles.passwordContainer}>
              <TextInput
                style={[commonStyles.input, { flex: 1 }]}
                placeholder={placeholder}
                secureTextEntry={!isPasswordVisible}
                value={placeholder === "Password" ? password : confirmPassword}
                onChangeText={
                  placeholder === "Password" ? setPassword : setConfirmPassword
                }
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
          ))}

          <PrimaryButton
            loading={loading}
            title="Sign up"
            onPress={handleSignup}
          />

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Do you have an account? </Text>
            <Link href="/pages/login">
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
});

export default RegisterScreen;
