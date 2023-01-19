import { View, Text } from "react-native";
import React from "react";
import { theme } from "../utils/theme";

const ListItem = ({ title, index }) => {
  return (
    <View>
      <Text style={{ color: theme.darkBlue, fontWeight: "bold" }}>
        {index + 1 + ": " + title}
      </Text>
    </View>
  );
};

export default ListItem;
