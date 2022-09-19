import jsonPlaceholder from "../apis/jsonPlaceholder_API";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = (id) => (dispatch) => {
  // This method used to prevent multi API calls for the same user by memorizing the result
  // The downside of this method is that it can't update the data even if it changes on the server
  _fetchUsers(id, dispatch);
};

// The _ mark at the begging means its a privet func, so don't call it unless you know what you're doing
const _fetchUsers = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
