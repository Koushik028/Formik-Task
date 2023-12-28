import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './Home'
import Books from './Books'
import Addbook from './Addbook'
import Author from './Author'
import AddAuthor from './Addauthor'
import Editbook from './Editbook'
import EditAuthor from './EditAuthor'

function App() {

  return (
   <Router>
    <div class="fixed-top">
  
    <nav id="navbar-example2" class="navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Library Management</a>
  <ul class="nav nav-pills">
  <li class="nav-item">
      <Link className='nav-link btn btn-outline-dark' to="/">Home</Link>
    </li>
    <li class="nav-item">
      <Link className='nav-link btn btn-outline-dark' to="/books">Books</Link>
    </li>
    <li class="nav-item">
    <Link className='nav-link btn btn-outline-dark' to="/addbooks">Add books</Link>
    </li>
    <li class="nav-item">
    <Link className='nav-link btn btn-outline-dark' to="/author">Author</Link>
    </li>
    <li class="nav-item">
    <Link className='nav-link btn btn-outline-dark' to="/addauthor">Add Author</Link>
    </li>
  
  </ul>
</nav>

</div>
   
  

        
        <Routes>
          
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/books' element={<Books></Books>}></Route>
          <Route path='/addbooks' element={<Addbook></Addbook>}></Route>
          <Route path='/author' element={<Author></Author>}></Route>
          <Route path='/addauthor' element={<AddAuthor></AddAuthor>}></Route>
          <Route path='/edit/:id' element={<Editbook></Editbook>}></Route>
          <Route path='/editauthor/:id' element={<EditAuthor></EditAuthor>}></Route>
          
        </Routes>
        
    

   </Router>
    )
}

export default App