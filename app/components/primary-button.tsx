import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#45B3CB",
  textColor = "#FFFFFF",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal:24
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default PrimaryButton;
