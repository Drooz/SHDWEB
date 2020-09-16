import React from "react";

const PostSummary = ({ post }) => {
  return (
    <div className="card z-depth-0 post-summary">
      <div className="card-content ">
        <span className="card-title post-title">{post.title}</span>
        <video className="responsive-video" controls>
          <source src={post.content} type="video/mp4" />
        </video>
        <div className=" bydetails">
          <p>Posted By Fares</p>
          <p className="grey-text">20/24/1204</p>
        </div>
      </div>
    </div>
  );
};
export default PostSummary;
