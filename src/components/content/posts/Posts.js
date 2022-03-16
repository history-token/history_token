import React from "react";
import "./posts.css";
import posts from "../../../data/posts/posts.json";
import Videos from "../../videos/Videos";

export default function Posts() {
  return (
    <div className="posts-wrapper">
      {posts.map((post, index) => (
        <div className="post hoverable">
          <div className="post-sidebar">
            <img src="./Assets/up-arrow.svg" />
            <span>{post.upvotes}k</span>
            <img src="./Assets/down-arrow.svg" />
          </div>
          <div className="post-title">
            <img src={post.subhstk.image_src} />
            <span className="subhstj-name">HSTK/{post.subhstk.name}</span>
            <span className="dot">
              <img src="Assets/dot.svg" />
            </span>
            <span className="post-by">Posted by {post.username}</span>
          </div>
          <div className="post-body">
            <span className="title">{post.title}</span>
            {post.video_src && <video src={post.video_src} controls />}
            {post.image_src && <img src={post.image_src}/>}
            {post.description && <span className="description">{post.description}</span>}
          </div>
          <div className="post-footer">
            <div className="footer-action">
                <img src="Assets/comment.svg" className="comment-icon"/>
                <span>{post.comments} Comments</span>
            </div>
            <div className="footer-action">
                <img src="Assets/share.svg"/>
                <span>Share</span>
            </div>
            <div className="footer-action">
                <img src="Assets/save.svg" className="save-icon"/>
                <span>Save</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


