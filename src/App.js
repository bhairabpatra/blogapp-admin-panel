import "./App.css";
 
import User from "./components/user/User";
import Post from "./components/Post/Post"; 
import Createpost from "./components/Post/Createpost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import UserForm from "./components/user/UserForm";
import PostDetails from "./components/Post/PostDetails";
import EditUser from "./components/user/EditUser";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Router>
      <div className="App">
        <Header />
        <Routes>
        
          <Route path="/" exact  element={<Home />} />  
          <Route path="/user" exact  element={<User />} />
          <Route path="post" element={<Post />} />
          <Route path="create-post" element={<Createpost />} />
          <Route path="create-user" element={<UserForm />} />
          <Route path="post-details/:id" element={<PostDetails />} />
          <Route path="edit-usser/:id" element={<EditUser />} />
          <Route path="sign-in" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
