import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./store/store";
import UsersList from "./Containers/UsersList/UsersList";
import { Provider } from "react-redux";
import axios from "axios";

export default class App extends Component<Props> {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Wohoo you're running people-listing app!
          </Text>
          <View>
            <UsersList />
          </View>
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 50
  },
  title: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 20
  }
});
