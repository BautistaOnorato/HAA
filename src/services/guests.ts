import type { Guest } from "../types/guest";

const URL = import.meta.env.PUBLIC_AWS_URL

export const getGuests = async (): Promise<Guest[]> => {
  console.log(1);
  
  const res = await fetch("https://estoeshaa-bucket.s3.sa-east-1.amazonaws.com/data/invitados.json")
  if (res.ok) {
    const data = await res.json()
    return data
  } else throw new Error("Error al cargar los invitados")
}