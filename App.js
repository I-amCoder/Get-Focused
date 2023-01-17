import { StyleSheet, ImageBackground, Text, View } from "react-native";

import Constants from "expo-constants";
import image from "./assets/Images/background-image.jpg";
import { Focus } from "./src/features/Focus";
import { useState } from "react";
import { Timer } from "./src/features/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {!currentSubject ? (
          <Focus setCurrentSubject={setCurrentSubject} />
        ) : (
          <Timer
            foucsSubject={currentSubject}
            onTimerEnd={() => {}}
            clearSubject={() => setCurrentSubject(null)}
          />
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    flex: 1,
  },
});
