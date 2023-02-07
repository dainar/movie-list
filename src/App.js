import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import UserContext, { UserProvider } from './contexts/UserContext';

 const user = {
    id:1,
    name: "Luis",
    favoriteMovies:[1,2,3]
  }

function App() {

  return (
    <div>
      <UserProvider>
      
          <Navbar />
        <MovieList />
        </UserProvider>
      
    </div>
  );
}

export default App;
