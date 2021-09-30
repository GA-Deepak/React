import React from "react";
import { Link } from "react-router-dom";
const AddUser = (props) => {
  const {
    handeleChange,
    handeleChange1,
    handeleChange2,
    handeleChange3,
    newList,
    setImage,
  } = props;
  return (
    <div>
    <div className="container">
      <h1>ADD THE Details</h1>
      
        <label htmlFor="fname">FIRSTNAME:
        <input type="text" onChange={handeleChange} />
        </label>
     
        <label htmlFor="lname">LASTNAME:
        <input type="text" onChange={handeleChange1} />
        </label>
      
        <label htmlFor="age">AGE:
        <input type="number" onChange={handeleChange2} />
        </label>
     
        <label htmlFor="email">EMAIL:
        <input type="email" onChange={handeleChange3} />
        </label>
     
        <label htmlFor="url">
          Image:
          <input type="url" onChange={(e) => setImage(e.target.value)} />
        </label>
      
      <Link to="/Dashboard" onClick={newList} className="btn btn-primary">
        Submit
      </Link>

      <Link to="/Dashboard" className="btn btn-primary" style={{margin:"10px",backgroundColor: "grey", textDecorationColor: "black"}}>
        Cancle
      </Link>

    </div>
    </div>
  );
};

export default AddUser;
