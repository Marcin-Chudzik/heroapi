import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav.js';
import HerosFeatured from './Components/HerosFeatured/HerosFeatured.js';
import SearchView from './Components/SearchView/SearchView.js';
import HeroDetails from './Components/HeroDetails/HeroDetails';

function App() {

  return (
    <>
    <Router>
      <Nav />
      <main>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={ <HerosFeatured /> } />
            <Route exact path='/search/' element={ <HerosFeatured /> } />
            <Route exact path='/search/:name' element={ <SearchView /> } />
            <Route exact path='/hero/:id' element={ <HeroDetails /> } />
          </Routes>
        </div>
      </main>
      <footer>
        <div className='container'>
          <p>This content is kindly provided by <a href='https://www.superheroapi.com/'>Superhero API</a></p>
        </div>
      </footer>
    </Router>
    </>
  );
};

export default App;
 