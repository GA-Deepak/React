import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
const Dashboard = (props) => {
  const { user, handleDelete, edit, view } = props;
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/Home" className="navbar-brand" style={{ margin: "10px" }}>
            Home
          </Link>
          <Link
            to="/AddUser"
            className="navbar-brand"
            style={{ margin: "10px" }}
          >
            AddUser
          </Link>
          <Link
            to="/About"
            className="navbar-brand "
            style={{ margin: "10px" }}
          >
            About
          </Link>
        </nav>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Photo</th>
              <th scope="col">Delete</th>
              <th scope="col">Edit</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {user.map((val) => (
              <tr key={Math.random()}>
                <th>{val.fname}</th>
                <th>{val.lname}</th>
                <th>{val.age}</th>
                <th>{val.email}</th>
                <th>
                  <img
                    src={val.image}
                    style={{ width: "50px", height: "30px" }}
                    alt="NotValidImage"
                  />
                </th>
                <th>
                  {" "}
                  <DeleteRoundedIcon
                    onClick={() => handleDelete(val)}
                    style={{ width: "30px", height: "30px" }}
                  />
                </th>
                <th>
                  <Link
                    to="/Edit"
                    onClick={() => edit(val)}
                    className="btn btn-success"
                  >
                    <ModeEditOutlineIcon />
                  </Link>
                </th>
                <th>
                  <Link
                    to="/View"
                    onClick={() => view(val)}
                    className="btn btn-primary"
                  >
                    <VisibilityIcon />
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
