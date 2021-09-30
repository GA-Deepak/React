import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
const Login = () => {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");

  const handeleChange8 = ({ currentTarget: input }) => {
    setpassword(input.value);
  };
  const handeleChange9 = ({ currentTarget: input }) => {
    setid(input.value);
  };
  const onclick = () => {
    if (id !== "admin" || password !== "admin") {
      alert("Invalid id or password");
    }
  };
  return (
    <div>
      <div className="container">
        <h1 style={{ margin: "10px" }}>Login Page</h1>
        <label htmlFor="id">
          Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" onChange={handeleChange8} />
        </label>

        <label htmlFor="title1">
          Password:
          <input type="password" onChange={handeleChange9} />
        </label>
        <div>
          {" "}
          <Link
            to={() =>
              id === "admin" && password === "admin" ? "/Dashboard" : "/"
            }
            onClick={onclick}
            className="btn btn-primary"
          >
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
