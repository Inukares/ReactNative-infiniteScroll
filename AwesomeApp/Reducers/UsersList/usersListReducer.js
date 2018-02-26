import {
  FETCH_USERS_INITIATED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_USERS
} from "../../Actions/actions";

const initialState = { pending: false, usersList: {}, error: "" };

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_INITIATED: {
      return {
        ...state,
        pending: true,
        error: ""
      };
    }

    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        usersList:
          state.usersList.length > 0
            ? [...state.usersList.concat(action.payload)]
            : action.payload,
        pending: false,
        error: ""
      };
    }

    case FETCH_USERS_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
