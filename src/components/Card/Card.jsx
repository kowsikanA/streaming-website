import './Card.css'
import { NavLink } from 'react-router-dom'

function Card({movieId, image, secondPoster, synopsis, genre, title, rating }) {
    
    console.log(movieId);
 
    return (
        <div>
            
            <NavLink to={'/details'} state={{
                
                    movieId, 
                   image, 
                    secondPoster, 
                   synopsis,
                    genre,
                   title,
                   rating}}>
            <img src={'https://image.tmdb.org/t/p/w500' + image} className='poster'  /></NavLink>
            
        </div>
    );
}

export default Card;
