import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import './ContentSection.css'

function ContentSection() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            //used in the themoviedb documentation: https://developer.themoviedb.org/reference/intro/getting-started
            const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
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

                setMovies(data.results.slice(0,6));
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
    <section className='content-section' style={{paddingTop: "105px"}}>
    <div className='offer-container'>
      <div className='details'>
        <h3 className='cost'>$5.99</h3>
        <p>Cinema</p>
        <p>Spotlight</p>
      </div>

      <div className='movies'>
           {movies.map(movie => (
           
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} className='content-poster'  />
                
                ))}
      </div>
    </div>
    </section>
  )
}

export default ContentSection
