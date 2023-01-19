import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "../Components/ListItem";
import { fontSizes } from "../utils/sizes";
import { theme } from "../utils/theme";

export const FocusHistory = ({ history }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recents</Text>
      {history.length > 0 ? (
        <FlatList
          data={history}
          renderItem={({ item, index }) => (
            <ListItem title={item} index={index} />
          )}
          //   keyExtractor={index}
        />
      ) : (
        <Text>No Recent History</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,

    width: "95%",
    alignSelf: "center",
    flexDirection: "column",
    // alignItems: "center",
    backgroundColor: theme.white,
    elevation: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: fontSizes.md,
    marginBottom: 10,
  },
});
