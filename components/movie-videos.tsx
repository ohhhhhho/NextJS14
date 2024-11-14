import { API_URL } from '../app/constans';
import styles from '../app/styles/movie-videos.module.css'

async function getVideo(id:string) {
    const json = await(await fetch(`${API_URL}/${id}/videos`)).json();
    return json
}

export default async function MovieVideo({id}:{id:string}) {
    const video = await getVideo(id)
    return(
        <>
           <div className={styles.container}>
            {video.map((video) => (
                <iframe
                key={video.id}
                src={`https://youtube.com/embed/${video.key}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}
                />
            ))}
            </div>
        </>
    )
}