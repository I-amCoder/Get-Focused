import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

import Constants from "expo-constants";
import image from "./assets/Images/background-image.jpg";
import { Focus } from "./src/features/Focus";
import { useState } from "react";
import { Timer } from "./src/features/Timer";
import { FocusHistory } from "./src/features/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {!currentSubject ? (
          <>
            <Focus setCurrentSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            foucsSubject={currentSubject}
            onTimerEnd={(item) => {
              setHistory([item, ...history]);
            }}
            clearSubject={() => setCurrentSubject(null)}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
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
