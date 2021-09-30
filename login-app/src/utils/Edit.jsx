import React from "react";
import { Link } from "react-router-dom";
const Edit = (props) => {
  const {
    handeleChange4,
    handeleChange5,
    handeleChange6,
    handeleChange7,
    save,
    editfname,
    editlname,
    editage,
    editemail,
    editimage,
    seteditimage,
  } = props;
  return (
    <div className="container">
     <h1>EDIT THE DETAILS</h1>
        <label htmlFor="fname">FIRSTNAME:
        <input type="text" value={editfname} onChange={handeleChange4} />
        </label>
      
        <label htmlFor="lname">LASTNAME:
        <input type="text" value={editlname} onChange={handeleChange5} />
        </label>
      
        <label htmlFor="age">AGE:
        <input type="number" value={editage} onChange={handeleChange6} />
        </label>
      
        <label htmlFor="email">EMAIL:
        <input type="email" value={editemail} onChange={handeleChange7} />
        </label>
     
        <label htmlFor="image">Image:
        <input
          type="url"
          value={editimage}
          onChange={(e) => seteditimage(e.target.value)}
        />
      </label>
      <Link to="/Dashboard" onClick={save} className="btn btn-primary">
        Save Changes
      </Link>
      
        <Link to="/Dashboard" className="btn btn-primary" style={{margin:"10px",backgroundColor: "grey", textDecorationColor: "black"}}>
          Cancle
        </Link>
      
    </div>
  );
};

export default Edit;
