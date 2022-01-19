import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie(props) {
    return (
        <div className={styles.movie}>
            <img src={props.coverImg} alt={props.title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${props.id}`}>{props.title}</Link>
                </h2>
                <p>{props.summary.length > 200 ? `${props.summary.slice(0, 200)}...` : props.summary}</p>
                <ul className={styles.movie__genres}>
                    {props.genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;