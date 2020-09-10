import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

class CreatePost extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="center" onSubmit={this.handleSubmit}>
          <h5 className="">Post Gameplay</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn #0d47a1 blue darken-3 z-depth-0">
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const MapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(null, MapDispatchToProps)(CreatePost);
