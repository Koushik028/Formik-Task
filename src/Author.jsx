import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Author() {
  const[author,setAuthor]=useState([]);
  useEffect(()=>{axios.get('https://65373e4bbb226bb85dd2fa14.mockapi.io/author').then((r)=>setAuthor(r.data))},[]) 
  
  const handleDelete=(id)=>{
    axios.delete(`https://65373e4bbb226bb85dd2fa14.mockapi.io/author/${id}`).then(()=> {alert("Author Info Deleted"); location.reload();})
  }
  
  return (
    <><div className='adbb'>
  
    <div className='bcardbg'>
      {author.map((e)=>(
      <div className='bkd'>
        <div class="card border-dark mb-3 max-width: 18rem bcd">
        <div class="card-header"><h3>Author</h3></div>
        <div class="card-body text-dark">
          <h5 class="card-title">Author : {e.authorname}</h5>
          <h5 class="card-title">Dob : {e.dob}</h5>
          <h5 class="card-title"> Bio : {e.bio}</h5>
          
        <button className='btn btn-sm btn-danger' onClick={()=> handleDelete(e.id)}>Delete</button>
        <Link to={`/editauthor/${e.id}`} className='btn btn-sm btn-info'>Edit</Link>
        </div>
      </div>
      </div>))}</div>
      </div>
      </> 
  )
}

export default Author
