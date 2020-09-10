import React from "react";
import { Link } from "react-router-dom";

const PostSummary = ({ post }) => {
  return (
    <div className="card z-depth-0 post-summary">
      <Link to={"/post/" + post.id}>
        <div className="card-content ">
          <span className="card-title post-title">{post.title}</span>
          <video class="responsive-video" controls>
            <source src={post.content} type="video/mp4" />
          </video>
          <div className=" bydetails">
            <p>Posted By Fares</p>
            <p className="grey-text">20/24/1204</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default PostSummary;
