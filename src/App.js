import React,{useState,useEffect} from 'react';
import './App.css';
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2e4bf9983e2103372a3ee4ec93e54af7&page=1'
const search_api = 'https://api.themoviedb.org/3/search/movie?&api_key=2e4bf9983e2103372a3ee4ec93e54af7&query='

function App() {
  const [movies,setMovies] = useState([]);
  const [searchMovie,setSearchMovie]=useState("");
  useEffect(() => {
    fetch(api_url)
       .then((res) => res.json())
       .then((data) => {
        setMovies(data.results);
       })
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(search_api + searchMovie)
       .then((res) => res.json())
       .then((data) => {
        setMovies(data.results);
       })
       setSearchMovie("");
  }
  const handleChange = (e) => {
   setSearchMovie(e.target.value);
  }
  return (
  
    <div className="App">
      <form onSubmit={handleSubmit} className="header">
        <h2 onClick={() => window.location.reload(false)}>NETFLIX</h2>
        <input type="search" className="search" value = {searchMovie} placeholder='Search...' onChange={handleChange}/>
      </form>
      <div className="container">
        {movies.length > 0 ? 
        movies.map((movie) => <Movie key={movie.id} {...movie}/>) : <NotFound/>}
      </div>
    </div>
    );
  }
  
  export default App;
  