import React from "react";
import PropsTypes from "prop-types";
import './movie.css';

function Movie({ year, title, summary, poster, genres }) {
    return <div className="movie">
        {/* <label for={} /> */}
        <img src={poster} alt={title} title={title} />
        <div className="moive__data">
            <h3 className="moive__title">{title}</h3>
            <h5 className="moive__year">{year}</h5>
            <ul className="genres">
                {genres.map((genre, index) => 
                    <li key={index} className="genres">{genre}</li>
                )}
            </ul>
            <p className="moive__summary">{summary.slice(0, 140)}...</p>
        </div>
    </div>
}

Movie.PropsTypes = {
    id: PropsTypes.number.isRequired,
    year: PropsTypes.number.isRequired,
    title: PropsTypes.string.isRequired,
    summary: PropsTypes.string.isRequired,
    poster: PropsTypes.string.isRequired,
    genres: PropsTypes.arrayOf(PropsTypes.string).isRequired
};

export default Movie;