import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
const PostForm = () => {
  const [userEmail, setemail] = useState("");
  const [unipsw, setpassword] = useState("");
  const history = useHistory();
  const f = (e) => {
    e.preventDefault();
    const login = { email: userEmail, password: unipsw };
    axios
      .post("https://reqres.in/api/login", login)
      .then((res) => {
        localStorage.setItem("token", res.data["token"]);
        history.push("/Dashboard");
      })
      .catch((e) =>
        toast.error("Enter the correct emailid and password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      );
  };

  const handeleChange1 = (e) => {
    setpassword(e.target.value);
  };
  const handeleChange2 = (e) => {
    setemail(e.target.value);
  };
  return (
    <form className="container">
      <h1 style={{ margin: "10px" }}>Login </h1>
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          required
          onChange={handeleChange2}
        />
      </div>
      <br />
      <div>
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          required
          onChange={handeleChange1}
        />
      </div>
      <br />
      <div>
        <Link to="/Dashboard" onClick={f} className="btn btn-primary">
          LogIn
        </Link>
        <ToastContainer/>
      </div>
    </form>
  );
};

export default PostForm;
