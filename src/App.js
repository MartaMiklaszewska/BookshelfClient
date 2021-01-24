import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Bookshelf from './components/Bookshelf/Bookshelf';
import Home from './components/Home/Home';


const App = () => (
  <Router>
    <Route path="/" exact component= {Home} />
    <Route path="/bookshelf" exact component={Bookshelf} />
  </Router>
);


export default App;
