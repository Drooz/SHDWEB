import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const PostDetails = (props) => {
  const { post } = props;
  /*const post = posts.map((ps) => {
    return ps.id === id;
  });*/
  if (post) {
    return (
      <div className="container section post-details">
        <div className="card z-depth-0 post-summary">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <video className="responsive-video" controls>
              <source src={post.content} type="video/mp4" />
            </video>
          </div>
          <div className="card-action">
            <div>
              Posted by {post.authorFirstName} {post.authorLastName}
            </div>
            <div>{post.created_at.seconds}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container section post-details">
        <div className="card z-depth-0 post-summary">
          <div className="card-content">
            <span className="card-title">Loading Post</span>
          </div>
        </div>
      </div>
    );
  }
};
const MapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
  };
};
export default compose(
  connect(MapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
