import React, { useEffect, useState } from 'react'
import './TVShows.css'
import { DropdownButton, Dropdown, ButtonGroup, Tabs, Tab } from 'react-bootstrap';
// https://react-bootstrap.netlify.app/docs/components/accordion/

import Card from '../../components/Card/Card';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

function TVShows() {
  const [movies, setMovies] = useState([]);
  const [releasedMovies, setRecentTVShows] = useState([]);
  const [releasedDate, setreleasedDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getResults( url, options, totalPages =2) {
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
      const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=vote_count.desc';
      const recentlyAddedUrl = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US';
      
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWJkMDA5NjRlZGE4N2FjNzY1N2E1MGZmNWRlNGQ1MCIsIm5iZiI6MTc0NjM4ODg0My4xOTcsInN1YiI6IjY4MTdjNzZiM2I1NTVlYzc3OTFkMGQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEe9TJktPbQfYi-2pxuAlfXVmLATs0I6JZOyIrgl7fc'
        }
      };

      try {
        setLoading(true);


        const res = await fetch(url, options); // line used from chatgpt
        // const res2 = await fetch(url2, options); 

        if (!res.ok) throw new Error("Unable to fetch users");
        const data = await res.json();


        
        // const data2 = await res2.json();
        setMovies(await getResults( url, options));
        setRecentTVShows(await getResults(recentlyAddedUrl, options))
        setreleasedDate(await getResults('https://api.themoviedb.org/3/discover/tv?first_air_date.lte=2025-12-30&include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=first_air_date.desc', options))
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
        setMovies([...movies].sort((a,b) => a.name.localeCompare(b.name)));
        setRecentTVShows([...releasedMovies].sort((a,b) => a.name.localeCompare(b.name)));
        setreleasedDate([...releaseDate].sort((a,b) => a.name.localeCompare(b.name)));
        break;
      case "2":
        setMovies([...movies].sort((a,b) => b.name.localeCompare(a.name)));
        setRecentTVShows([...releasedMovies].sort((a,b) => b.name.localeCompare(a.name)));
        setreleasedDate([...releaseDate].sort((a,b) => b.name.localeCompare(a.name)));
        break;

      case "3":
        setMovies([...movies].sort((a,b) => a.popularity - b.popularity));
        setRecentTVShows([...releasedMovies].sort((a,b) => a.popularity - b.popularity));
        setreleasedDate([...releaseDate].sort((a,b) =>  a.popularity - b.popularity));
        break;

      case "4":
        setMovies([...movies].sort((a,b) => b.popularity - a.popularity));
        setRecentTVShows([...releasedMovies].sort((a,b) => b.popularity - a.popularity));
        setreleasedDate([...releaseDate].sort((a,b) =>  b.popularity - a.popularity));
        break
      case "5":
        setMovies([...movies].sort((a,b) => a.vote_average - b.vote_average));
        setRecentTVShows([...releasedMovies].sort((a,b) => a.vote_average - b.vote_average));
        setreleasedDate([...releaseDate].sort((a,b) =>  a.vote_average - b.vote_average));
      
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
            <Dropdown.Item eventKey="1">firstName.asc</Dropdown.Item>
            <Dropdown.Item eventKey="2">firstName.desc</Dropdown.Item>
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
                        title={movie.name}
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
            {releasedDate.map(tvDate => (
            tvDate.poster_path ? (<Card
                 movieId={tvDate.id}
                        image={tvDate.poster_path}
                        secondPoster={tvDate.backdrop_path}
                        synopsis={tvDate.overview}
                        genre={tvDate.genre_ids}
                        title={tvDate.name}
                        rating={tvDate.vote_average}
              />) : null
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
                        title={movie.name}
                        rating={movie.vote_average}
              />
            ))}
          </div>
        </Tab>
        {/* <Tab eventKey='contact' title='Contact' disabled>Tab content for home</Tab> */}

      </Tabs>

    </div>
  )
}

export default TVShows;