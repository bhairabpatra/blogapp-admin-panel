import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const apiUrl = "http://localhost:8080/api/v1/category";
  const getAllCategory = "http://localhost:8080/api/v1/posts/category";


  const [Category, setCategory] = useState([]);

  const fetchCategory = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  };

  const allCategory = (id) => {
    axios
    .get(getAllCategory.concat("/") + id)
    .then((res) => {
      // setCategory(res.data);
      console.log(res.data)
    })
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchCategory();
  }, []);


  return (
    <div>
      <div className="heading">
        <h2>Category types</h2>
      </div>
      {Category.map((item, index) => {
        if (index < 3) {
          return (
            <div className="row">
              <span className="all-category">
                <h1 className="all-category-type" onClick={ () => allCategory(item.postCategory)}>{item.postCategory}</h1>
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};
export default Category;
