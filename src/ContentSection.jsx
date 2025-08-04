import React from 'react'
import { useEffect, useState } from 'react';
import './ContentSection.css';


function ContentSection() {
  // const [movies, setMovies] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //       const fetchMovies = async () => {
  //           //used in the themoviedb documentation: https://developer.themoviedb.org/reference/intro/getting-started
  //           const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  //           const options = {
  //               method: 'GET',
  //               headers: {
  //                   accept: 'application/json',
  //                   Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWJkMDA5NjRlZGE4N2FjNzY1N2E1MGZmNWRlNGQ1MCIsIm5iZiI6MTc0NjM4ODg0My4xOTcsInN1YiI6IjY4MTdjNzZiM2I1NTVlYzc3OTFkMGQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uEe9TJktPbQfYi-2pxuAlfXVmLATs0I6JZOyIrgl7fc'
  //               }
  //           };

  //           try {
  //               setLoading(true);


  //               const res = await fetch(url, options); // line used from chatgpt
  //               if (!res.ok) throw new Error("Unable to fetch users");
  //               const data = await res.json();

  //               setMovies(data.results.slice(0,6));
  //           } catch (err) {
  //               setError(err.message);
  //           } finally {
  //               setLoading(false);
  //           }
  //       };

  //       fetchMovies();
  //   }, []);

  //   if (loading) return <Loading message="Fetching user data..." />;
  //   if (error) return <ErrorMessage message={error} />;
  return (
    <section className='content-section'>
    <div className='offer-container'>
      <div className='details'>
        <h3>$5.99</h3>
        <p>Cinema</p>
        <p>Spotlight</p>
      </div>

      <div className='movies'>
        
      </div>
    </div>
    </section>
  )
}

export default ContentSection
