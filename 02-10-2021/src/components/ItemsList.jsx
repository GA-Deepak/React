import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './pagination';
import { Paginate } from "../utills/paginate";
import Searchbox from './Searchbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
          <TableContainer>
           <Table className="table">
  <TableHead>
    <TableRow>
      <TableCell id="get" scope="col">userId</TableCell>
      <TableCell id="get" scope="col">id</TableCell>
      <TableCell id="get" scope="col">title</TableCell>
      <TableCell id="get" scope="col">body</TableCell>
      
    </TableRow>
  </TableHead>
  <TableBody>
   {Items.map(val=>
     <TableRow key={val.id}>
     <TableCell id="td" >{val.userId}</TableCell>
     <TableCell id="td">{val.id}</TableCell>
     <TableCell id="td">{val.title}</TableCell>
     <TableCell id="td">{val.body}</TableCell>
   </TableRow>)}
    </TableBody>
    </Table>
    </TableContainer>
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