export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: "FETCH_POSTS", payload: [] });
};
