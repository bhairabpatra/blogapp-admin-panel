import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink, Link } from "react-router-dom";
import Createpost from "./Createpost";
import "./Createpost.css";
import Tranding from "./Tranding";
function Post() {
  const apiUrl = "http://localhost:8080/api/v1/posts";
  const [post, setPost] = useState([]);

  const fetcPost = () => {
    Axios.get(apiUrl)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetcPost();
  }, []);

  return (
    <div>
      <div className="container col-md-12 mt-4">
      <Link to="/create-post"><button className="btn btn-primary btm-md create-post-btn mb-4">Create a new Post</button></Link>
        
        <div className="row">
          <div className="col-md-9">
          <div className="heading">
              <h2>Recent blogs</h2>
           </div>
              {post.map((item) => {
                return (
                  <div>
                   
                    <div class="blog-post p-2 mb-3 text-dark">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-2">
                            <div className="blog-post-img">
                            <img src={item.postImgUrl}  alt="" />
                              </div>
                          </div>
                          <div className="col-md-10 blog-post-description">
                             <div className="top-area">
                                <h1 className="post-title">{item.postTitle}</h1>
                                <p>{item.sortDescription}</p>
                                <p className="post-category">{item.postCategory}</p>
                              </div>
                              <div className="btm-area">
                                  <p className="post-data">{item.createdAt}</p>
                              </div>
                              <Link to={`/post-details/${item.id}`}>
                              <div className="view-post">
                                <button className="btn btn-primary btn-sm">view post</button>
                              </div>
                              </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            
          </div>
          <div className="col-md-3 right-side-post">
           <Tranding />
         
       </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
