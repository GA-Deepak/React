import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './pagination';
import { Paginate } from "../utills/paginate";
import Searchbox from './Searchbox';
import "./style.css";
const ItemsList = () => {
    const [api, setapi] = useState([]);
    const [currentPage, setcurrentPage]=useState(1);
    const [text, settext]= useState("");

    const pageSize =10;
    useEffect(()=>{
    axios.get(' https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
       setapi(response.data);
    })
    })
   const handlePageChange = (page) => {
      setcurrentPage(page);
    };

    const handeleChange = query => {
      settext(query);
      setcurrentPage(1);

    };
    let filtered = api;
    if(text){
      filtered = api.filter(m=>m.title.includes(text));
    }
    const Items = Paginate(filtered, currentPage, pageSize);
    
    return ( 
      <div>
        <h1 id="head">Table using axios api</h1>
        <Searchbox value= {text} onChange={handeleChange}/>
        <div>
           <table className="table">
  <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">body</th>
      
    </tr>
  </thead>
  <tbody>
   {Items.map(val=>
     <tr key={val.id}>
     <td>{val.userId}</td>
     <td>{val.id}</td>
     <td>{val.title}</td>
     <td>{val.body}</td>
   </tr>)}
    </tbody>
    </table>
        </div>
        <Pagination
         itemsCount={api.length}
        pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}/>
        </div>
     );
}

export default ItemsList;