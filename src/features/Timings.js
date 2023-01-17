import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RoundedButton } from "../Components/RoundedButton";

export const Timings = ({ onChangeTime }) => {
  return (
    <View style={styles.container}>
      <View style={styles.timingButtonWrapper}>
        <RoundedButton
          onPress={() => onChangeTime(15 / 60)}
          size={70}
          title={"15s"}
        />
      </View>
      <View style={styles.timingButtonWrapper}>
        <RoundedButton
          onPress={() => onChangeTime(30 / 60)}
          size={70}
          title={"30s"}
        />
      </View>
      <View style={styles.timingButtonWrapper}>
        <RoundedButton onPress={() => onChangeTime(1)} size={70} title={"1m"} />
      </View>
      <View style={styles.timingButtonWrapper}>
        <RoundedButton
          onPress={() => onChangeTime(10)}
          size={70}
          title={"10m"}
        />
      </View>
      <View style={styles.timingButtonWrapper}>
        <RoundedButton
          onPress={() => onChangeTime(20)}
          size={70}
          title={"20m"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  timingButtonWrapper: {
    // flex: 1,
    padding: 5,
    alignItems: "center",
  },
});
