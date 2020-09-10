import React from "react";
import { connect } from "react-redux";

const PostDetails = (props) => {
  const id = props.match.params.id;
  const { posts } = props;
  /*const post = posts.map((ps) => {
    return ps.id === id;
  });*/

  const post = posts.length ? (
    posts.map((post) => {
      if (post.id === id) {
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
                <div>Posted By OOZ</div>
                <div>2nd Spet 2020</div>
              </div>
            </div>
          </div>
        );
      }
      return null;
    })
  ) : (
    <div className="center">No posts to show</div>
  );
  return <div>{post}</div>;
};
const MapStateToProps = (state) => {
  return {
    posts: state.post.posts,
  };
};
export default connect(MapStateToProps)(PostDetails);
