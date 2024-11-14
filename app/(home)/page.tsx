import Link from "next/link";

export const metadata={
    title:'Home'
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // await new Promise((res)=>setTimeout(res,1000))
    const json  = await(await fetch(API_URL)).json();
    return json
}

export default async function HomePage(){
    const movies = await getMovies();
    return (
    <> 
    <h1>Hello</h1>
    <ul>
        {movies.map(i => 
            <li key={i.id}>
                <Link href={`/movie/${i.id}`}>{i.title}</Link>
            </li>
        )}
    </ul>
    </>
    )
}

