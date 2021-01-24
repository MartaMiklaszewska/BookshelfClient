import React, { useEffect, useState }from 'react';
import Axios from 'axios';
import './Bookshelf.css';
function Bookshelf(){

  const [bookList, setBookList] = useState([]);


  useEffect(() => {
  Axios.get('http://localhost:3001/read').then((response) =>{
    setBookList(response.data)
  })

  }, [])

const updateBook = (id) => {

  
  Axios.put('http://localhost:3001/update', {
    id: id,
    updatedTitle: updatedTitle, 
    updatedAuthor: updatedAuthor, 
    updatedType: updatedType,
    
    })
  
  return (
    console.log( {
      id: id, 
      updatedTitle: updatedTitle, 
      updatedAuthor: updatedAuthor, 
      updatedType: updatedType
    })
  )
}  

const deleteBook = (id) => {
  Axios.delete(`http://localhost:3001/delete/${id}`)
}

  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedAuthor, setUpdatedAuthor] = useState('');
  const [updatedType, setUpdatedType] = useState('');


  return (


   bookList.map((val, key) => {
    return(    <div>
      <nav
      nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">
      <img src="./book-icon.png" width="40" height="40" class="d-inline-block" alt=""/>
          Add new books!
      </a></nav>
  <body id="body">
    <div  className="Bookshelf"  key={key}>
      <div class="card">
      <div class="row g-0">
        <div class="col-sm-6 col-md-6 col-lg-9">
          
      <div id="bookObject">
        <br />
        
        <h1>{val.title}</h1>
        <h2>{val.author}</h2>
        <h3>{val.type}</h3>
         <hr/>
        
        </div>
      
  </div>
  <div class="col-sm-6 col-md-6 col-lg-3" >
    <div className="card">
      <div className="card-body">
        <form id="form">
         
                <h2>Update</h2>
              <div class="input-group mb-3"> 
              <div className='form-group'>
                <label class="form-label">Title</label>
                <input id="input" type="text" defaultValue={val.title} className="form-control" onChange={(event) => {setUpdatedTitle(event.target.value)}}/>
              </div>
              <div className='form-group'>
                <label class="form-label">Author</label>
                <input defaultValue={val.author} id="input" type="text" className="form-control" onChange={(event) => {setUpdatedAuthor(event.target.value)}}/>
              </div>
                <select id="custom-select" defaultValue={val.type} className="custom-select form-select form-select-lg mb-3" onChange={(e) => {
                  const updatedType=e.currentTarget.value;
                  setUpdatedType(updatedType) }}>
                      
                      <option value="Want to Read">Want to Read</option>
                      <option value="Currently Reading">Currently Reading</option>
                      <option value="Read">Read</option>
                </select></div>
            <div >
              <button type="submit" className="btn btn-secondary btn-md"  onClick={()=> updateBook(val._id)} >
                Update
              </button>
              <button id="delete-button" className="btn btn-secondary btn-md" onClick={()=> deleteBook(val._id)}>Delete</button>
                </div> 
                </form>
            </div>
         
        </div>
        
        </div>
         </div>
         </div>
      <br/> 
    </div>
  
    </body></div>)
  }) 

  )
}

export default Bookshelf;