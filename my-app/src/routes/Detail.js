import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    console.log(Movie);

    return (
        <h1>Detail</h1>
    );
}
export default Detail;