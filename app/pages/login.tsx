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
import commonStyles from "../common/common-styles";

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
    <View style={commonStyles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require("../../assets/images/nutrix-background.jpg")}
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
          onChangeText={(text) => setEmail(text)}
        />

        <View style={commonStyles.passwordContainer}>
          <TextInput
            style={[commonStyles.input, { flex: 1 }]}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
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

        <TouchableOpacity style={commonStyles.forgotPassword}>
          <Text style={commonStyles.forgotPasswordText}>Forgot password?</Text>
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
