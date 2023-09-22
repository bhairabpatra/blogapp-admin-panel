import React from "react";
import { useEffect, useState} from "react";
import Axios from "axios";
import Button from '@mui/material/Button';
import {Link } from "react-router-dom";
import DialogBox from "../common/DialogBox";
import { useNavigate } from "react-router-dom";
 
 
function User() {
  let navigate = useNavigate();
  const apiUrl = "http://localhost:8080/api/v1/getUsers";
  const [data, setData] = useState([]);

  const fetcgUser = () => {
    Axios.get(apiUrl)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetcgUser();
  }, []);

  const handleEdit = (userId) =>{
      navigate("/edit-usser/" + userId); 
  }
  return (
    <div>
      <div className="container col-md-12">
        <Link to="/create-user">
          <button className="btn btn-primary btm-md create-post-btn mb-4 mt-5">
            Create a new User
          </button>
        </Link>
        <div className="row">
          <div className="col-md-12">
            <div className="mt-3">
              <h2>User details</h2>
              <table className="table border">
                <thead className="table-dark">
                  <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>User Type</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                {data.map((data, index) => {
                  return (
                    <tbody className="table-striped">
                      <tr>
                        <td key={data.id}>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>Created</td>
                        <td>Updated</td>
                        <td>Admin</td>
                        <td>
 
                          <Button variant="contained"  onClick={() => handleEdit(data.id)}>
                          Edit
                         </Button>
                        </td>
                        <td>
                          {/* <button
                            className="btn btn-danger btn-sm"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                          >
                            Delete
                          </button> */}
                           <DialogBox  id={data.id} name={data.name} />
                          
                        </td>
                      </tr>
                    </tbody>

                    
                    
                  );

                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default User;


