import { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  render() {
    const { user } = this.props;

    return <div>{user ? user.name : "Loading...."}</div>;
  }
}

// It's a function to get the state from the Redux Store & link it to the props
// The second arg is the refrence of the current comp
const mapStateToProps = (state, compProps) => {
  return { user: state.users.find((user) => user.id === compProps.userId) };
};

// Connect : First brackets - links the {mapStateToProps} function & the 2nd arg link the actions to the props of the state
export default connect(mapStateToProps, { fetchPostsAndUsers })(UserHeader);
