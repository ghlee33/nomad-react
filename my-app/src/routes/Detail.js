import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
    const { id } = useParams();
    const [ Loading, setLoading ] = useState({});
    const [ Movie, setMovie ] = useState({});
    const getMovie = async () => {
        const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
        const response = await fetch(url);
        const json = await response.json();
        setLoading(false);
        setMovie(json['data']['movie']);
    }
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className={styles.container}>
            <img src={Movie.large_cover_image} className={styles.cover_image} />
            <div className={styles.details}>
                <a href={Movie.url}>{Movie.title}</a>
                <p>{Movie.description_full}</p>
            </div>
        </div>
    );
}
export default Detail;