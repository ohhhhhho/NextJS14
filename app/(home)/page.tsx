import styles from '../styles/home.module.css'
import Movie from "../../components/movie";
import { API_URL } from '../constans';

export const metadata={
    title:'Home'
}


async function getMovies() {
    // await new Promise((res)=>setTimeout(res,1000))
    const json  = await(await fetch(API_URL)).json();
    return json
}

export default async function HomePage(){
    const movies = await getMovies();
    return (
    <> 
    <div className={styles.container}>
        {movies.map(i => 
            <Movie key={i.id} id={i.id} title={i.title} poster_path={i.poster_path}/>
        )}
    </div>
    </>
    )
}

