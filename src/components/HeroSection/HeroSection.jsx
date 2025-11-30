import './HeroSection.css'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import React, { useEffect, useState } from 'react';


import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

function HeroSection() {
  const [movies, setMovies] = useState([]);
  const [oldMovies, setOldMovies] = useState([]);


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
      const tvRatedURL = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
      const oldMoviesUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&primary_release_date.gte=1920-01-01&primary_release_date.lte=1940-01-01&sort_by=vote_average.desc';

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
        const res2 = await fetch(tvShowsUrl, options);
        const res3 = await fetch(moviesRatedUrl, options);
        const res4 = await fetch(tvRatedURL, options)
        const resBlackandWhite = await fetch(oldMoviesUrl, options)


        if (!res.ok) throw new Error("Unable to fetch users");
        if (!res2.ok) throw new Error("Unable to fetch users");
        if (!res3.ok) throw new Error("Unable to fetch users");
        if (!res4.ok) throw new Error("Unable to fetch users");
        if (!resBlackandWhite.ok) throw new Error("Unable to fetch users");


        const data = await res.json();
        const data2 = await res2.json();
        const data3 = await res3.json();
        const data4 = await res4.json();
        const data5 = await resBlackandWhite.json();

        setMovies(data.results.slice(0, 25));

        setTvShows(data2.results.slice(0, 25));
        setMovieRating(data3.results.slice(0, 3));
        setTvRatings(data4.results.slice(0, 3))
        setOldMovies(data5.results.slice(6,11));
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

        <Carousel.Item className='carouselItem'  >
          <Carousel.Caption style={{ width: "100%", left: "0px", top: "50%", marginTop: "-20px" }}>
            <h2 style={{ textAlign: "end", padding: "40px"}}>Black and White movies</h2>
          </Carousel.Caption>

          <div style={{ marginTop: "60px" }}>
            <div className="old">
            {oldMovies.map(oldMovie => (
              <img key={oldMovie.id} src={'https://image.tmdb.org/t/p/w185' + oldMovie.poster_path} />

            ))}
          </div>
          </div>
        </Carousel.Item>


        <Carousel.Item className='carouselItem'>
          {/* <img text="Third Slide" className='d-block w-100 '
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>sample slide1</p>
          </Carousel.Caption> */}
          <div className="row row-cols-1 row-cols-md-3 mb-3 mt-5 pt-5 text-center my-5" >
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm w-75 mx-auto">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal fs-5">$12/monthly</h4>
                </div>
                  <div className="card-body">
                      <h6 className='py-2'>stream 45,000 movies/tvs monthly</h6>
                      <h6 className='py-2'>4K/Ultra HD/HD Quality</h6>
                      <h6 className='py-2'>Supports All Devices</h6>
                      <h6 className='py-2'>Email Support</h6>

                  </div>
                  <Button variant="primary" size="md" >
                    Buy Now
                  </Button>
                </div>
                
              </div>

              <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm w-75 mx-auto">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal fs-5">$24/monthly</h4>
                </div>
                  <div className="card-body">
                      <h6 className='py-2'>stream 1,000,000 movies/tvs monthly</h6>
                      <h6 className='py-2'>4K/Ultra HD/HD Quality</h6>
                      <h6 className='py-2'>Supports All Devices</h6>
                      <h6 className='py-2'>Email Support</h6>

                  </div>
                  <Button variant="primary" size="md" >
                    Buy Now
                  </Button>
                </div>
                
              </div>

              
              <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm w-75 mx-auto">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal fs-5">$65/monthly</h4>
                </div>
                  <div className="card-body">
                      <h6 className='py-2'>stream 500,000,000 movies/tvs monthly</h6>
                      <h6 className='py-2'>4K/Ultra HD/HD Quality</h6>
                      <h6 className='py-2'>Supports All Devices</h6>
                      <h6 className='py-2'>Email Support</h6>

                  </div>
                  <Button variant="primary" size="md" >
                    Buy Now
                  </Button>
                </div>
                
              </div>
            </div>


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

                  <img key={movieRate.id} src={'https://image.tmdb.org/t/p/w92' + movieRate.poster_path}  />
                  <h4>Rating: <strong>{movieRate.vote_average}</strong> / 10</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="tv-ratings">
              <h3 style={{
                margin: "25px"
              }}>TV Ratings</h3>

              <div className='mov' style={{ marginTop: "30px" }}>
                {
                tvRatings
                  .map(tvRating => (
                  <div className='placement'>
                    
                    <img key={tvRating.id} src={'https://image.tmdb.org/t/p/w92' + tvRating.poster_path}  />
                    <h4>Rating:  <strong>{tvRating.vote_average}</strong> / 10</h4>

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

