import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useFormContext } from "@/services/form-context";

const UserView = () => {
  const { formData } = useFormContext();
  const userImageUri = process.env.EXPO_PUBLIC_USER_IMAGE_URL;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Avatar.Image
          size={80}
          source={{
            uri: userImageUri,
          }}
          style={styles.avatar}
        />

        {formData.name.length > 0 && formData.email.length > 0 && (
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Hi there!</Text>
            <Text style={styles.name}>{formData.name}</Text>
            <Text style={styles.email}>{formData.email}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default UserView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderColor: "#f0f0f0",
    borderWidth: 2,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffffff",
  },
  avatar: {
    borderWidth: 2,
    borderColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  greeting: {
    flex: 1,
    marginLeft: 16,
  },
  greetingText: {
    fontSize: 18,
    color: "#495057",
    marginBottom: 4,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2d4059",
  },
  email: {
    fontSize: 16,
    color: "#6c757d",
    marginTop: 4,
  },
});
