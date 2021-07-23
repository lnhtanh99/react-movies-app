import { useState, useEffect } from 'react'
import Movies from './components/Movies';
import Header from './components/Header';

function App() {
  const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
      .then(response => response.json())
      .then(({ results }) => {
        console.log(results);
        setMovies(results);
      })
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(SEARCH_API + search)
      .then(response => response.json())
      .then(({ results }) => {
        setMovies(results);
      })
  }

  return (
    <>
      <Header 
        handleSubmit={ handleSubmit } 
        handleChange={ handleChange } 
        search={ search }
      />
      <Movies movies={ movies }/>
    </>

  );
}

export default App;
