import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

function FeaturedTVShowsList() {
    const [media, setMedia] = useState([]);
    const [allmedia, setAllmedia] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const fetchmedia = async () => {
            //used in the themoviedb documentation: https://developer.themoviedb.org/reference/intro/getting-started
            const url = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1';
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

                setMedia(data.results.slice(0, 6));
                setAllmedia(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchmedia();
    }, []);

    if (loading) return <Loading message="Fetching user data..." />;
    if (error) return <ErrorMessage message={error} />;
    
    function handleClick() {
        if (clicked) {
            setMedia(allmedia.slice(0, 6));
        } else {
            setMedia(allmedia)
        }
        setClicked(!clicked)
    }
    return (
        <div style={{ padding: "1rem" }}>
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                cursor: "pointer"
            }}>
                <h3 style={{ color: "white", fontSize: "20px" }}>Featured TV Shows</h3>
                <a style={{ color: "gray", fontSize: "15px" }} onClick={handleClick}>{clicked ? "Show Less" : "View All"}</a>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, auto)",
                marginTop: "1rem",
                paddingLeft: "10rem",
                paddingRight: "10rem"
            }}>
                {media.map(movie => (
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
        </div>
    );
}

export default FeaturedTVShowsList;
