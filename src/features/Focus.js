import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { theme } from "../utils/theme";
import { RoundedButton } from "./RoundedButton";

export const Focus = ({ ...props }) => {
  const [subject, setSubject] = useState(null);
  const handleSave = () => {
    console.log(subject);
    props.setCurrentSubject(subject);
    setSubject(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label={"What's Your Focus Today?"}
        mode={"outlined"}
        onChangeText={setSubject}
        style={styles.input}
        value={subject}
      />
      <RoundedButton
        style={styles.button}
        size={50}
        title={"✓"}
        textStyle={styles.buttonText}
        onPress={() => handleSave()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    // marginTop: 40,
    paddingTop: 60,
    padding: 20,
    backgroundColor: theme.white,
    opacity: 0.9,
    elevation: 34,
  },
  text: {
    color: theme.white,
  },
  input: {
    width: "80%",
  },
  button: {
    borderColor: theme.darkBlue,
    marginTop: 5,
    marginLeft: 8,
  },
  buttonText: {
    color: theme.darkBlue,
    fontWeight: "900",
  },
});
