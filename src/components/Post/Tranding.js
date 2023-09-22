import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';

const Tranding = () => {

    const apiUrl = "http://localhost:8080/api/v1/posts";
    const [tranding, setTranding] = useState([]);
  
    const fetcPost = () => {
      axios.get(apiUrl)
        .then((res) => {
            setTranding(res.data);
        })
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      fetcPost();
    }, []);
  return (
    <div>
         <div className="heading">
              <h2>Treanding blogs</h2>
           </div>
           {tranding.map((item) => {
             return (
               <div>
                 <div class="blog-post-right-section p-2 mb-3 text-dark">
                   <div className="col-md-12">
                     <div className="row">
                       <div className="col-md-12">
                         <div className="blog-post-latest">
                         <img src={item.postImgUrl}  alt="" />
                           </div>
                       </div>
                       <div className="col-md-12 blog-post-description">
                          <div className="top-area">
                             <h1 className="latest-post-title">{item.postTitle}</h1>
                           </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             );
           })}
    </div>
  )
}
export default Tranding
