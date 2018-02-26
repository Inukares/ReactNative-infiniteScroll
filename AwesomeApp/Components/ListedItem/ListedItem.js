import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {
  Header,
  Content,
  List,
  Text,
  ListItem,
  SearchBar,
  Left,
  Body,
  Right
} from "native-base";
import PropTypes from "prop-types";

export const ListedItem = ({ item }) => (
  <ListItem>
    <View style={{ marginTop: 10 }}>
      <View style={styles.container}>
        <View style={styles.columnWrapper}>
          <View style={styles.leftWrapper}>
            <Text style={styles.emailStyling}>{item.email}</Text>
            <Text style={styles.idStyling}>{item.id}</Text>
          </View>
          <View style={styles.rightWrapper}>
            <Text style={styles.rightContent}>dummy content lolo</Text>
          </View>
        </View>
      </View>
    </View>
  </ListItem>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 12,
    alignItems: "flex-start",
    flexWrap: "nowrap"
  },
  leftWrapper: {
    flex: 0.5,
    fontSize: 12,
    flexDirection: "column"
  },
  emailStyling: {
    flex: 1,
    fontSize: 12,
    color: "blue",
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    alignContent: "space-between"
  },
  idStyling: {
    flex: 1,
    fontSize: 12,
    color: "magenta",
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    alignContent: "space-between"
  },
  rightWrapper: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  columnWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    width: 330
  },
  rightContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

ListedItem.propTypes = {
  item: PropTypes.object.isRequired
};
