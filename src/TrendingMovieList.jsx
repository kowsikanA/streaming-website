import { useEffect, useState } from 'react';
import Card from './Card';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';

function TrendingMovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            //used in the themoviedb documentation: https://developer.themoviedb.org/reference/intro/getting-started
            const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
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
        <div style={{ padding: "1rem" }}>
            <h3 style={{color: "white", fontSize: "20px"}}>Featured Movies</h3>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, auto)",
                marginTop: "1rem",
                paddingLeft: "10rem",
                paddingRight: "10rem"
            }}>
                {movies.map(movie => (
                    <Card
                        key={movie.id}
                        image={movie.poster_path}
                    />
                ))}
            </div>
        </div>
    );
}

export default TrendingMovieList;
