import React from "react";
import { Link } from "react-router-dom";
const View = (props) => {
  const { viewfname, viewlname, viewage, viewemail, viewimage } = props;

  return (
    <div>
        <h1 style={{display:"flex", justifyContent:"center" ,alignItems:"center"}}>VIEW THE DETAILS</h1>
      <div className="container">
        <h3>
          {viewfname} {viewlname}
        </h3>
        <h5>{viewage}</h5>
        <h5>{viewemail}</h5>

        <img src={viewimage} alt="" id="img" style={{height: "250px",width: "350px"}} />

        <Link to="/Dashboard" className="btn btn-primary">
          Back To Dashboard
        </Link>
      </div>
    </div>
  );
};

export default View;
