import { API_URL } from "../app/(home)/page";

async function getVideo(id:string) {
    const json = await(await fetch(`${API_URL}/${id}/videos`)).json();
    return json
}

export default async function MovieVideo({id}:{id:string}) {
    const video = await getVideo(id)
    return(
        <>
        </>
    )
}