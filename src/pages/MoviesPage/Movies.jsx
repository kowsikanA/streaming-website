import React, { useEffect, useState } from 'react'
import './Movies.css'
import { DropdownButton, Dropdown, ButtonGroup, Tabs, Tab } from 'react-bootstrap';
// https://react-bootstrap.netlify.app/docs/components/accordion/

import Card from '../../components/Card/Card';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [releasedMovies, setreleasedMovies] = useState([]);
  const [releaseDate, setReleaseDate] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getResults(url, options, totalPages = 2) {
    let allResults = [];

    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(`${url}&page=${page}`, options);
      if (!response.ok) throw new Error(`Failed to fetch page ${page}`);

      const database = await response.json();
      allResults = [...allResults, ...database.results]
    }
    return allResults
  }

  useEffect(() => {
    const fetchMovies = async () => {
      //used in the themoviedb documentation: https://developer.themoviedb.org/reference/intro/getting-started
      const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&sort_by=vote_count.desc';
      const recentlyAddedUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US';

      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWJkMDA5NjRlZGE4N2FjNzY1N2E1MGZmNWRlNGQ1MCIsIm5iZiI6MTc0NjM4ODg0My4xOTcsInN1YiI6IjY4MTdjNzZiM2I1NTVlYzc3OTFkMGQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEe9TJktPbQfYi-2pxuAlfXVmLATs0I6JZOyIrgl7fc'
        }
      };

      try {
        setLoading(true);


        const res = await fetch(url, options); 

        if (!res.ok) throw new Error("Unable to fetch users");
        const data = await res.json();

        setMovies(await getResults(url, options));
        setreleasedMovies(await getResults(recentlyAddedUrl, options));
        setReleaseDate(await getResults('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&primary_release_date.lte=2025-12-31&sort_by=primary_release_date.desc', options))
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  function handleSort(eventKey){

    switch (eventKey){

      case "1":
        setMovies([...movies].sort((a,b) => a.title.localeCompare(b.title)));
        setreleasedMovies([...releasedMovies].sort((a,b) => a.title.localeCompare(b.title)));
        setReleaseDate([...releaseDate].sort((a,b) => a.title.localeCompare(b.title)));
        break;
      case "2":
        setMovies([...movies].sort((a,b) => b.title.localeCompare(a.title)));
        setreleasedMovies([...releasedMovies].sort((a,b) => b.title.localeCompare(a.title)));
        setReleaseDate([...releaseDate].sort((a,b) => b.title.localeCompare(a.title)));
        break;

      case "3":
        setMovies([...movies].sort((a,b) => a.popularity - b.popularity));
        setreleasedMovies([...releasedMovies].sort((a,b) => a.popularity - b.popularity));
        setReleaseDate([...releaseDate].sort((a,b) =>  a.popularity - b.popularity));
        break;

      case "4":
        setMovies([...movies].sort((a,b) => b.popularity - a.popularity));
        setreleasedMovies([...releasedMovies].sort((a,b) => b.popularity - a.popularity));
        setReleaseDate([...releaseDate].sort((a,b) =>  b.popularity - a.popularity));
        break
      case "5":
        setMovies([...movies].sort((a,b) => a.vote_average - b.vote_average));
        setreleasedMovies([...releasedMovies].sort((a,b) => a.vote_average - b.vote_average));
        setReleaseDate([...releaseDate].sort((a,b) =>  a.vote_average - b.vote_average));
      
      default:

    }
  }

  if (loading) return <Loading message="Fetching user data..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={
      {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        height: "auto",
        padding: "40px",
      }
    }>
      <div className='button-contents' style={{ marginBottom: "25px" }}>
        {/* <ButtonGroup>
          <DropdownButton as={ButtonGroup} title="Filters " id='bg-nested-dropdown' variant='success'>
            <Dropdown.Item eventKey="1">a</Dropdown.Item>
            <Dropdown.Item eventKey="2">b</Dropdown.Item>

          </DropdownButton>
        </ButtonGroup> */}
        <Dropdown onSelect={handleSort}>
          <Dropdown.Toggle variant='success' id='dropdown-basic' className='px-3 py-2 '>
            Filters
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">Name.asc</Dropdown.Item>
            <Dropdown.Item eventKey="2">Name.desc</Dropdown.Item>
            <Dropdown.Item eventKey="3">popularity.asc</Dropdown.Item>
            <Dropdown.Item eventKey="4">popularity.desc</Dropdown.Item>
            <Dropdown.Item eventKey="5">rating.asc</Dropdown.Item>


          </Dropdown.Menu>
        </Dropdown>

        <form action="" className='checkboxbutton'>
          <input type="checkbox" name="freeMovies" id="freeMovies" />
          <label htmlFor="freeMovies">Free Movies</label>
        </form>
      </div>


      <Tabs
        defaultActiveKey="home"
        className='mb-3 border border-primary rounded-start-5 rounded-end-5 '
        fill
      >
        <Tab className='tab rounded-start-5' eventKey='home' title='Most Watched' >
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, auto)",
            marginTop: "1rem",
            paddingLeft: "3rem",
            paddingRight: "3rem"
          }}>
            {movies.map(movie => (
              <Card
                  movieId={movie.id}
                        image={movie.poster_path}
                        secondPoster={movie.backdrop_path}
                        synopsis={movie.overview}
                        genre={movie.genre_ids}
                        title={movie.title}
                        rating={movie.vote_average}
              />
            ))}
          </div>
        </Tab>

        <Tab className='tab' eventKey='profile' title='Release Date'>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, auto)",
            marginTop: "1rem",
            paddingLeft: "3rem",
            paddingRight: "3rem"
          }}>
            {releaseDate.map(movie => (
             movie.poster_path ? (<Card
                  movieId={movie.id}
                        image={movie.poster_path}
                        secondPoster={movie.backdrop_path}
                        synopsis={movie.overview}
                        genre={movie.genre_ids}
                        title={movie.title}
                        rating={movie.vote_average}
              />): null
            ))}
          </div>
        </Tab>

        <Tab className='tab rounded-end-5' eventKey='longer-tab' title='Recently Added'>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, auto)",
            marginTop: "1rem",
            paddingLeft: "3rem",
            paddingRight: "3rem"
          }}>
            {releasedMovies.map(movie => (
              <Card
                movieId={movie.id}
                        image={movie.poster_path}
                        secondPoster={movie.backdrop_path}
                        synopsis={movie.overview}
                        genre={movie.genre_ids}
                        title={movie.title}
                        rating={movie.vote_average}
              />
            ))}
          </div>
        </Tab>

      </Tabs>

    </div>
  )
}

export default Movies
