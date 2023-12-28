import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Books() {
  const[books,setBooks]=useState([]);
  
  useEffect(()=>{axios.get('https://65373e4bbb226bb85dd2fa14.mockapi.io//books').then((r)=>setBooks(r.data))},[]) ;

  const handleDelete=(id)=>{
    axios.delete(`https://65373e4bbb226bb85dd2fa14.mockapi.io//books/${id}`).then(()=> {alert("Book Info Deleted"); location.reload();})
  }
  return (
    <>
    <div className='adbb'>

    <div className='bcardbg'>
      {books.map((e)=>(
      <div className='bkd'>
        <div class="card border-dark mb-3 max-width: 18rem bcd">
        <div class="card-header"><h3>Books</h3></div>
        <div class="card-body text-dark">
          <h5 class="card-title">Title  : {e.title}</h5>
          <h5 class="card-title">Author : {e.author}</h5>
          <h5 class="card-title">ISBN : {e.isbn}</h5>
          <h5 class="card-title">Publish Date : {e.publishDate}</h5>
          
        <button className='btn btn-sm btn-danger' onClick={()=> handleDelete(e.id)}>Delete</button>
        <Link to={`/edit/${e.id}`} className='btn btn-sm btn-info'>Edit</Link>
        </div>
      </div>
      </div>))}</div>
      </div>
      </>   )
}

export default Books
