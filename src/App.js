import React from 'react';
import HomePage from './routes/Home';
import BookPage from './routes/Book';
import {Routes, Route} from 'react-router-dom';


function App(){
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/book' element={<BookPage />} />
      </Routes>
    </>
  );
}

export default App;
