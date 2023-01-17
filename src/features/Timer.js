import React, { useState } from "react";
import { StyleSheet, Text, Vibration, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../Components/Countdown";
import { RoundedButton } from "../Components/RoundedButton";
import { fontSizes, spacing } from "../utils/sizes";
import { theme } from "../utils/theme";
import { Timings } from "./Timings";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ foucsSubject, onTimerEnd, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const handleOnEnd = () => {
    Vibration.vibrate(PATTERN);
    setTimeout(() => {
      clearSubject();
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={setProgress}
          minutes={minutes}
          onEnd={() => handleOnEnd()}
        />
      </View>
      <View style={{ padding: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={theme.darkBlue}
          style={{ height: spacing.sm }}
        />
      </View>
      <View
        style={{ paddingTop: spacing.xxl, backgroundColor: theme.darkBlue }}
      >
        <Text style={styles.title}>Focusing On:</Text>
        <Text style={styles.task}>{foucsSubject}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <RoundedButton
          title={isStarted ? "Pause" : "Start"}
          onPress={() => {
            setIsStarted(!isStarted);
          }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timings onChangeTime={setMinutes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: theme.darkBlue,
  },
  title: {
    textAlign: "center",
    color: theme.white,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
  task: {
    fontSize: fontSizes.xl,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.white,
  },
});
