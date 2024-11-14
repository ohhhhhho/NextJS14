import { API_URL } from "../app/(home)/page";

async function getMovie(id:string){
    const json = await(await fetch(`${API_URL}/${id}`)).json();
    return json
}
export default async function MovieInfo({id}:{id:string}){
    const movie = await getMovie(id) 
    return(
        <>
            <h2>{movie.title}</h2>
        </>
    )
}

