export type Episode = {
  id: number
  title: string
  youtube: string
  spotify?: string
  image_url: string
  date: string
  tags: TagEnum[] 
}

export enum TagEnum {
  "EDIBORDIAL" = "Edibordial",
  "HORA AFRICANA" = "La Hora Africana",
  "HAA HUNTER" = "HAA Hunter",
  "COMPETENCIA" = "Competencia",
  "STORYBORD" = "Storybord",
  "MAXIMA CIENCIA" = "Máxima Ciencia",
  "MAXIMA VERDAD" = "Máxima Verdad",
  "DD/DS" = "DD/DS",
  "ESPECIAL" = "Especial",
  "MÉTODO" = "Método",
}