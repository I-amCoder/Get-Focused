import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { fontSizes } from "../utils/sizes";
import { theme } from "../utils/theme";
import { RoundedButton } from "../Components/RoundedButton";

export const Focus = ({ ...props }) => {
  const [subject, setSubject] = useState(null);
  const handleSave = () => {
    props.setCurrentSubject(subject);
    setSubject(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>what do you want to foucs on?</Text>
      <View style={styles.inputBox}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 20,
    backgroundColor: theme.white,
    opacity: 0.9,
    elevation: 34,
  },
  header: {
    fontSize: fontSizes.md,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
    color: theme.darkBlue,
  },
  inputBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
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
