import React from 'react';
import { useState } from "react";
import {useHistory} from 'react-router-dom';
import Axios from 'axios';

import './Home.css';
import 'semantic-ui-css/semantic.min.css';



function Home() {


  const addToList = () => {
    Axios.post('http://localhost:3001/insert', {title: title, author: author, type: type});
    
  }
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");


  

let history = useHistory();
    const redirect = () => {
    history.push('/bookshelf') 
    }
  

  return (

    
    <body id="body">
    <div className="modal-dialog text-center"> 
    
      
 
      <div id="main-section" className="main-section col-sm-9 ">
        <div id="modal-content" className="modal-content col-12 form-input">
      <div className="col-12" id="book">
        <img src="./book-icon.png"></img>
      </div>
      <form id="form-group" class="form-group">   
      <h1 id="title">My bookshelf</h1>
  
      <label>Title</label>
      <input type="text" placeholder="Enter title..." onChange={(event) => {setTitle(event.target.value)}}/>
      <label>Author</label>
      <input type="text" placeholder="Enter author..." onChange={(event) => {setAuthor(event.target.value)}}/>
 
        <select  id="select" className="custom-select form-select form-select-lg mb-3"
        onChange={(e) => {
            const selectedType=e.currentTarget.value;
            setType(selectedType) }} > 
              <option value="Want to Read">Want to Read</option>
              <option value="Currently Reading">Currently Reading</option>
              <option value="Read">Read</option>
        </select>
        </form>
     
     <div>

    <button type="submit" className="btn btn-secondary" onClick={addToList}>Add to your bookshelf</button>
    <hr/>
    <button className="btn btn-dark" onClick={redirect} >Check your bookshelf</button>
     <hr/>
    </div>
      
  </div>
</div></div></body>
  );
}

export default Home;
