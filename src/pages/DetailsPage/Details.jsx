import React from 'react'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import './Details.css'

function Details() {
  const [genreList, setgenreList] = useState([]);
  const [details, setDetails] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { movieId,
    image,
    secondPoster,
    synopsis,
    genre,
    title,
    rating } = location.state || {};



  useEffect(() => {
    const fetchMovies = async () => {
      //used in the themoviedb documentation: https://developer.themoviedb.org/reference/intro/getting-started
      const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
      const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
      const url2 = 'https://api.themoviedb.org/3/genre/tv/list?language=en';
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

        const res2 = await fetch(url2, options);
        const data2 = await res2.json();

        const res44 = await fetch(detailsUrl, options);
        const data44 = await res44.json();

        setDetails(data44);

        setgenreList([...data.genres, ...data2.genres]) // combines both movies andtv genres

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


  function getGenre(list) {
    for (let i = 0; i < genreList.length; i++) {
      if (genreList[i].id === list) {
        return genreList[i].name;
      }
    }
    return null;
  }
  return (

    <div className='media-details' style={{
      color: "white"

    }}>
      <img src={'https://image.tmdb.org/t/p/w185' + image} alt="" />
      <div className="details" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        <h3>{title}</h3>

        <div style={{
          display: "flex",
          gap: "10px"
        }}>
          <div className="genres" style={{
            display: "flex",
            gap: "10px"
          }}>
            {genre.map(g => (
              <p>{getGenre(g)} | </p>
            ))}
          </div>
          <p className='video-details'>PG</p>
          <p className='video-details'>{details.runtime} mins</p>
          <p className='video-details'>CC</p>
        </div>
        <div className="ratings-popular">
          <p>{Math.floor(rating)}/10</p>
        </div>
        <div className='story'>
          {synopsis}
        </div>

        <div className="costButtons">
          <button onClick={() => navigate("/success", {
            state: {
              movieId,
              secondPoster,
              title, 
              image
            }
          })}>Rent $3.99</button>
          <button onClick={() => navigate("/success", {
            state: {
              movieId,
              secondPoster,
              title, 
              image
            }
          })}>Buy $14.99</button>
        </div>
      </div>
      <img src={'https://image.tmdb.org/t/p/w300' + secondPoster} alt="" />

    </div>
  )
}

export default Details
