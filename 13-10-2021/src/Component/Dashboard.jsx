import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return ( 
        <div>
            <h1>hello</h1>
            <Link to="/" className="btn btn-primary">Back to login page</Link>
        </div>
     );
}
 
export default Dashboard;