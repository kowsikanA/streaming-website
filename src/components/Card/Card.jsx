import './Card.css'

function Card({ image }) {
    return (
        <div>
            <img src={'https://image.tmdb.org/t/p/w500' + image} className='poster'  />
        </div>
    );
}

export default Card;
