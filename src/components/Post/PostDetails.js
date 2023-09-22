import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Tranding from "./Tranding";
const PostDetails = () => {
  // Use the useParams hook to get the ID from the URL
  const { id } = useParams();
  const apiUrl = "http://localhost:8080/api/v1/posts";
  const [post, setPost] = useState([]);

  const getSinglePost = () => {
    axios
      .get(apiUrl.concat("/") + id)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSinglePost();
    console.log(post);
  }, []);
  return (
    <div className="container mt-5">
      <div className="col-md-12 post-details">
        <div className="row">
          <div className="col-md-9">
            <div className="post-section">
              <div className="post-heading">
                <h1>{post.postTitle}</h1>
                <p>
                  Post type {post.postCategory} | Last updated on{" "}
                  {post.updatedAt}
                </p>
              </div>
              <div className="post-img">
                <img src={post.postImgUrl} alt="" />
              </div>

              <div className="post-long-description">
                <p>{post.longDescription}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  nec velit nec libero malesuada malesuada. Aenean nec justo nec
                  elit tincidunt ultrices. Integer non nunc vel odio auctor
                  sollicitudin. Nullam ut sapien eu purus vehicula condimentum.
                  Duis consectetur ullamcorper quam, a fringilla nunc volutpat
                  nec. Quisque ac nisl ut nisi gravida vehicula. Fusce
                  convallis, nulla a euismod dictum, odio justo hendrerit urna,
                  vel viverra nisi arcu sed enim. Phasellus vestibulum, sem eu
                  euismod suscipit, massa arcu euismod tortor, ac scelerisque
                  felis libero quis lectus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <Tranding />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
