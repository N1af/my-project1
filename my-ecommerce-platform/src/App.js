import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/common/Navbar';
import SearchBar from './component/common/Searchbar';
import Store from './pages/Store';

function App() {
  return (
    <Router>
       <Navbar />
       <SearchBar />
       <Routes>
        <Route path = "/" element = {<Store/>}/>
       </Routes>
    </Router>
     
  );
}

export default App;
