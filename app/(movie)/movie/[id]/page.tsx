import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-videos";


export default async function MovieDetail({params:{id}}:{params:{id:string}}){
    return(
        <>
        <Suspense fallback={<h3>Loading...  </h3>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense>
            <MovieVideo id={id}/>
        </Suspense>
        </>
    )
}

