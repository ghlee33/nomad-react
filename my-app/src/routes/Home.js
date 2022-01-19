import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [ loading, setLoading ] = useState(true);
    const [ movies, setMovies ] = useState([]);
    const getMovies = async () => {
        const url = "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";
        const response = await fetch(url);
        const json = await response.json();
        setLoading(false);
        setMovies(json['data']['movies']);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                movies.map((movie) => (
                    <div className={styles.movies} key={movie.id}>
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    </div>
                ))
            )}
        </div>
    );
}
export default Home;
