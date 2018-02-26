import React from "react";
import { ActivityIndicator, View } from "react-native";
export const renderFooter = pending => {
  if (pending) return null;
  return (
    <View
      style={{
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
      }}
    >
      <ActivityIndicator animating size="large" />
    </View>
  );
};
