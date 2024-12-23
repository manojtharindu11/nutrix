import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, IconButton } from "react-native-paper";

const UserView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* User Avatar */}
        <Avatar.Image
          size={80}
          source={{
            uri: "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg",
          }}
          style={styles.avatar}
        />

        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Hi,</Text>
          <Text style={styles.name}>Gumilar Jae</Text>
          <Text style={styles.email}>manojtharindu11@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default UserView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, // Added border radius
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
    fontSize: 18, // Increased font size
    color: "#495057", // Darker color for better readability
    marginBottom: 4,
  },
  name: {
    fontSize: 26, // Increased font size
    fontWeight: "bold",
    color: "#2d4059",
  },
  email: {
    fontSize: 16, // Increased font size
    color: "#6c757d",
    marginTop: 4,
  },
});
