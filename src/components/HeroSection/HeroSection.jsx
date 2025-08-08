import './HeroSection.css'
import Carousel from 'react-bootstrap/Carousel'


import React, { useEffect, useState } from 'react';


import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

function HeroSection() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [movieRatings, setMovieRating] = useState([]);
  const [tvRatings, setTvRatings] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      //used in the themoviedb documentation: https://developer.themoviedb.org/reference/intro/getting-started
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      const tvShowsUrl = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1';
      const moviesRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

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
        const res2 = await fetch(tvShowsUrl, options);
        const res3 = await fetch(moviesRatedUrl, options);
        const res4 = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
        


        if (!res.ok) throw new Error("Unable to fetch users");
        if (!res2.ok) throw new Error("Unable to fetch users");
        if (!res3.ok) throw new Error("Unable to fetch users");
        if (!res4.ok) throw new Error("Unable to fetch users");


        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        const data4 = await res4.json();

        setMovies(data.results.slice(0, 16));

        setTvShows(data2.results.slice(0, 16));
        setMovieRating(data3.results.slice(0, 3));
        setTvRatings(data4.results.slice(0, 3))
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
    <div className='heroSection m-2' >
      <Carousel controls={false} interval={5000} pause={false} slide={true} defaultActiveIndex={0}>


        <Carousel.Item className='carouselItem' >
          <Carousel.Caption style={{ width: "100%", left: "0px", top: "0px", marginTop: "-20px" }}>
            <h2 style={{ textAlign: "center", backgroundColor: "lightgreen", padding: "10px" }}>Now Streaming Movies</h2>
          </Carousel.Caption>

          <div  style={{ marginTop: "60px" }}>
            {movies.map(movie => (
              <img key={movie.id} src={'https://image.tmdb.org/t/p/w185' + movie.poster_path} />

            ))}
          </div>


        </Carousel.Item>

        <Carousel.Item className='carouselItem'  >
          <Carousel.Caption style={{ width: "100%", left: "0px", top: "0px", marginTop: "-20px" }}>
            <h2 style={{ textAlign: "center", backgroundColor: "lightgreen", padding: "10px" }}>Now Streaming TV Shows</h2>
          </Carousel.Caption>

          <div style={{ marginTop: "60px" }}>
            {tvShows.map(tvShow => (
              <img key={tvShow.id} src={'https://image.tmdb.org/t/p/w185' + tvShow.poster_path} />

            ))}
          </div>
        </Carousel.Item>

        <Carousel.Item className='carouselItem'>
          <img text="Third Slide" className='d-block w-100 '
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>sample slide1</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item className='carouselItem'>
          <img text="Third Slide" className='d-block w-100 '
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>sample slide1</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item className='carouselItem'  >
          <Carousel.Caption style={{ width: "100%", left: "0px", top: "0px", marginTop: "-20px" }}>
            <h2 style={{ textAlign: "center", backgroundColor: "#322e47ff", padding: "10px" }}>Top Ratings</h2>
          </Carousel.Caption>
          <h3>Movies</h3>

          <div className="display-top-ratings">

            <div className="movie-ratings">
              <h3 style={{
                margin: "25px"
              }}>Movie Ratings</h3>
              <div className='mov' style={{ marginTop: "30px" }}>
                {movieRatings.map(movieRate => (
                  <div className='placement'>

                  <img key={movieRate.id} src={'https://image.tmdb.org/t/p/w154' + movieRate.poster_path}  />
                  <h4>Rating: <strong>{movieRate.vote_average}</strong> /10</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="tv-ratings">
              <h3 style={{
                margin: "25px"
              }}>TV Ratings</h3>

              <div className='mov' style={{ marginTop: "30px" }}>
                {tvRatings.map(tvRating => (
                  <div className='placement'>

                    <img key={tvRating.id} src={'https://image.tmdb.org/t/p/w154' + tvRating.poster_path}  />
                    <h4>Rating:  <strong>{tvRating.vote_average}</strong> /10</h4>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </Carousel.Item>


      </Carousel>
    </div>
  )
}

export default HeroSection

