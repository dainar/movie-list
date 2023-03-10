import React from 'react'

const Movie = ({ movie }) => {

    const imgStyles = {
        height: '260px',
        objectFit: 'cover',
    }
    

    return (
        <div className="card">
            <img 
                src={movie.imageUrl}
                alt={movie.title}
                className="card-img-top"
                style={imgStyles}
            />
            <div className="card-body">
                <h4>{movie.title}</h4>
                 
                    <button className="btn  'btn-outline-primary"
                        >
                        Favorito
                    </button>
                
            </div>
        </div>
    )
}

export default Movie
