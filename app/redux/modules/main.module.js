const GET_USERS_LIST = 'GET_USERS_LIST';
const GET_USERS_LIST_SUCCESS = 'GET_USERS_LIST_SUCCESS';
const GET_USERS_LIST_FAIL = 'GET_USERS_LIST_FAIL';

const GET_FOLLOWERS_LIST = 'GET_FOLLOWERS_LIST';
const GET_FOLLOWERS_LIST_SUCCESS = 'GET_FOLLOWERS_LIST_SUCCESS';
const GET_FOLLOWERS_LIST_FAIL = 'GET_FOLLOWERS_LIST_FAIL';

const initialState = {
  usersList: [],
  usersPageNumber: 0,
  followersList: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        usersPageNumber: state.usersPageNumber + 1,
      };

    case GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        usersList: [
          ...state.usersList,
          ...action.result,
        ],
      };

    case GET_USERS_LIST_FAIL:
      return {
        ...state,
        error: true,
      };

    case GET_FOLLOWERS_LIST:
      return {
        ...state,
      };

    case GET_FOLLOWERS_LIST_SUCCESS:
      return {
        ...state,
        followersList: [
          ...action.result,
        ],
      };

    case GET_FOLLOWERS_LIST_FAIL:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export function getUsersList(usersPageNumber) {
  return {
    types: [GET_USERS_LIST, GET_USERS_LIST_SUCCESS, GET_USERS_LIST_FAIL],
    promise: (client) => client.get(
      `https://api.github.com/users?per_page=20&since=${usersPageNumber * 20}`
    )
  };
};

export function getFollowersList(followersUrl) {
  return {
    types: [GET_FOLLOWERS_LIST, GET_FOLLOWERS_LIST_SUCCESS, GET_FOLLOWERS_LIST_FAIL],
    promise: (client) => client.get(followersUrl)
  };
}
