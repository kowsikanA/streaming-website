import React, { useEffect, useState } from 'react'
import './Movies.css'
import { DropdownButton, Dropdown, ButtonGroup, Tabs, Tab } from 'react-bootstrap';
// https://react-bootstrap.netlify.app/docs/components/accordion/

import Card from '../../components/Card/Card';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

function About() {
  const [movies, setMovies] = useState([]);
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
      const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&sort_by=vote_count.desc';
      const url2 = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc';

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
        const res2 = await fetch(url2, options); 

        if (!res.ok) throw new Error("Unable to fetch users");
        const data = await res.json();


        
        const data2 = await res2.json();
        const allMovies = await getResults( url, options,  3);
        setMovies(allMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

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

        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic' className='px-3 py-2 '>
            Filters
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">a</Dropdown.Item>
            <Dropdown.Item eventKey="2">b</Dropdown.Item>
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
                key={movie.id}
                image={movie.poster_path}
              />
            ))}
          </div>
        </Tab>
        <Tab className='tab' eventKey='profile' title='Release Date'>Tab content for home</Tab>
        <Tab className='tab rounded-end-5' eventKey='longer-tab' title='Recently Added'>Tab content for home</Tab>
        {/* <Tab eventKey='contact' title='Contact' disabled>Tab content for home</Tab> */}

      </Tabs>

    </div>
  )
}

export default About