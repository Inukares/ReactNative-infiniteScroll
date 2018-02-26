import { takeLatest, call, put } from "redux-saga/effects";
import request from "axios";
import { getRandomString } from "../helpers/getRandomString";
import _ from "lodash";
import {
  FETCH_USERS_INITIATED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_USERS
} from "../Actions/actions.js";
import Axios from "axios";

const requestUsers = () => {
  return Axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users"
  });
};

function* fetchUsers() {
  yield put({ type: FETCH_USERS_INITIATED });

  try {
    // Blocks the code at this line till it is executed
    const response = yield call(requestUsers);
    // Need to manually randomize id's, and emails, because API returns always the same response
    const usersList = _.forEach(response.data, data => {
      _.set(data, "id", getRandomString());
      _.set(data, "email", getRandomString() + "@coolmail.com");
    });

    yield put({
      type: FETCH_USERS_SUCCESS,
      payload: usersList
    });
  } catch (e) {
    yield put({
      type: FETCH_USERS_ERROR,
      payload: e
    });
  }
}

export default function* fetchUsersSagaMonitor() {
  yield takeLatest(FETCH_USERS, fetchUsers); // Takes every such request
}
