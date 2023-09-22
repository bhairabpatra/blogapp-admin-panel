import React, { useEffect, useState } from "react";
import "./Createpost.css";
import axios from "axios";
const Createpost = () => {
  const postApi = "http://localhost:8080/api/v1/posts";
  const getcategoryApi = "http://localhost:8080/api/v1/category";

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState([]);
  const [createPost, setCreatePost] = useState({
    postTitle: "",
    sortDescription: "",
    longDescription: "",
    postImgUrl: "",
    postLike: "",
    userId: "",
    postCategory: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setCreatePost({
      ...createPost,
      [event.target.name]: event.target.value,
    });
  };

  const getCategory = () => {
    axios
      .get(getcategoryApi)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log("-----", err);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handelCreateUser = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Check for empty fields
    for (const key in createPost) {
      if (!createPost[key]) {
        newErrors[key] = "This field is required";
      }
    }
    // If there are errors, set them in the state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      axios
        .post(postApi, createPost)
        .then((response) => {
          setMessage(response.data.message);
          console.log("form submut successfully");
        })
        .catch((error) => {
          console.error("Error:", error.response.data.email);
        });
    }
  };

  return (
    <div className="container mt-5">
     

      <form className="create-post">
        <div className="heading mb-4">
          <h3>Create blog post </h3>
        </div>
        <div className="mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            name="postTitle"
            id="name"
            value={createPost.postTitle}
            onChange={handleInputChange}
            placeholder="Enter post title"
            required
          />
          <p className="error">{errors.postTitle}</p>
        </div>
        <div className="mb-3 mt-3">
          <textarea
            id="textArea"
            name="sortDescription"
            value={createPost.sortDescription}
            onChange={handleInputChange}
            rows={2} // You can specify the number of visible rows here
            cols={50} // You can specify the number of visible columns here
            className="form-control"
            placeholder="Enter sort description"
          ></textarea>
          <p className="error">{errors.sortDescription}</p>
        </div>

        <div className="mb-3 mt-3">
          <textarea
            id="textArea"
            name="longDescription"
            value={createPost.longDescription}
            onChange={handleInputChange}
            rows={4} // You can specify the number of visible rows here
            cols={50} // You can specify the number of visible columns here
            className="form-control"
            placeholder="Enter long description"
          ></textarea>
          <p className="error">{errors.longDescription}</p>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="postImgUrl"
            value={createPost.postImgUrl}
            onChange={handleInputChange}
            placeholder="Enter img URL"
          />
          <p className="error">{errors.postImgUrl}</p>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="postLike"
            value={createPost.postLike}
            onChange={handleInputChange}
            placeholder="Enter post like"
          />
          <p className="error">{errors.postLike}</p>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="userId"
            value={createPost.userId}
            onChange={handleInputChange}
            placeholder="Enter urer id"
          />
          <p className="error">{errors.userId}</p>
        </div>
        <div className="mb-3">
          <select
            id="selectBox"
            name="postCategory"
            className="form-control"
            value={createPost.postCategory}
            placeholder="Select Example"
            onChange={handleInputChange}
          >
            <option value="">Select post category</option>
            {category.map((cat) => {
              return (
                <option value={cat.postCategory}>{cat.postCategory}</option>
              );
            })}
          </select>
        </div>
        <div className="mb-4 mt-5 text-center">
          <button
            type="submit"
            onClick={handelCreateUser}
            className="btn btn-lg btn-primary w-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Createpost;
