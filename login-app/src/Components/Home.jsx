import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/Dashboard" className="btn btn-primary">Back to Dashboard</Link>
    </div>
  );
};

export default Home;
