import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-videos";
interface IParams {
    params: { id: string };
}
export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id)
    return {
        title:movie.title 
    }
}
export default async function MovieDetail({ params: { id } }: IParams) {
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

