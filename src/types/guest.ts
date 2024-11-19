export type Guest = {
  name: string
  roles: RoleEnum[]
  categories: CategoryEnum[]
  appearances: { date: string, href: string }[]
  description: string
  image_url: string
}

export enum RoleEnum {
  AMIGO = "Amigos de la casa",
  JURADO = "Jurado de viernes",
  METODO = "Método",
  "MAXIMA CIENCIA" = "Máxima Ciencia",
  "MAXIMA VERDAD" = "Máxima Verdad",
  ESPECIAL = "Especial",
}

export enum CategoryEnum {
  ARQUITECTURA = "Arquitectura",
  ARTISTA = "Artista",
  AVENTURA = "Aventura",
  AVES = "Aves",
  CIENCIA = "Ciencia",
  CINE = "Cine",
  DEPORTE = "Deporte",
  ECONOMIA = "Economía",
  EMPRESARIO = "Empresario",
  ENTRETENIMIENTO = "Entretenimiento",
  FILOSOFIA = "Filosofía",
  FUTBOL = "Fútbol",
  GASTRONOMIA = "Gastronomía",
  HISTORIA = "Historia",
  MODA = "Moda",
  MUSICA = "Música",
  OTROS = "Otros",
  PERIODISMO = "Periodismo",
  POLITICA = "Política",
  PRONOGRAFIA = "Pronografía",
  TWITTER = "Twitter",
  VIDEOJUEGOS = "Videojuegos",
  YOUTUBER = "Youtuber"
}