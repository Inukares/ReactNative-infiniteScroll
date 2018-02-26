import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, List } from "native-base";
import { connect } from "react-redux";
import { getPending, getError, getUsersList } from "./selectors";
import PropTypes from "prop-types";
import { renderFooter } from "../../Components/UsersListFooter/renderFooter";
import { ListedItem } from "../../Components/ListedItem/ListedItem";

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  requestUsers = () => this.props.onRequestUsers();

  componentDidMount() {
    this.requestUsers();
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    const { pending, usersList, onRequestUsers } = this.props;

    return usersList.length > 0 ? (
      <List>
        <Container>
          <FlatList
            data={usersList}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => {
              return <ListedItem item={item} />;
            }}
            ListFooterComponent={() => renderFooter(pending)}
            refreshing={pending}
            onEndReached={this.requestUsers}
            onEndReachedThreshold={0}
          />
        </Container>
      </List>
    ) : null;
  }
}

const mapStateToProps = state => ({
  pending: getPending(state),
  usersList: getUsersList(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onRequestUsers: () => dispatch({ type: "FETCH_USERS" })
  };
};

UsersList.propTypes = {
  onRequestUsers: PropTypes.func.isRequired,
  pending: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
