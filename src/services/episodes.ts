import type { Episode } from "../types/episode"

const URL = import.meta.env.PUBLIC_AWS_URL

export const getEpisodes = async (): Promise<Episode[]> => {  
  const res = await fetch(URL + "programas.json")
  if (res.ok) {
    const data = await res.json()
    return data
  } else throw new Error("Error al cargar los episodios")
}
