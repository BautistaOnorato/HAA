import type { Guest } from "../types/guest";

const URL = import.meta.env.PUBLIC_AWS_URL

export const getGuests = async (): Promise<Guest[]> => {  
  const res = await fetch(URL +"invitados.json")
  if (res.ok) {
    const data = await res.json()
    return data
  } else throw new Error("Error al cargar los invitados")
}