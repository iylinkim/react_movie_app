// import React from "react";
// import PropTypes from "prop-types";

// //component state가 필요없을 때는 class component일 필요 없음

// function Movie({id, year, title, summary, poster}){
//     console.log({title});
//     return <h4>{title}</h4>;
// }

// Movie.propTypes = {
//     id: PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
// };

// export default Movie;

import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({year, title, summary, poster, genres}){
return <div className="movie">
    <img src={poster} alt={title} title={title}/>
    <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
            {/* map은 itemNumber를 arguement로 줌 */}
            {genres.map((genre, index) => (
                <li key={index} className="genres_genre">{genre}</li>
            ))}
        </ul>
        <p className="movie_summary">{summary.slice(0,180)}</p>
    </div>
</div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;