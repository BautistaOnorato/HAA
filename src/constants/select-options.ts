import { CategoryEnum, RoleEnum } from "../types/guest"

export const roleOptions = [
  RoleEnum.AMIGO,
  RoleEnum.JURADO,
  RoleEnum.METODO,
  RoleEnum["MAXIMA CIENCIA"],
  RoleEnum["MAXIMA VERDAD"],
  RoleEnum.ESPECIAL
]

export const categoryOptions = [
  CategoryEnum.ARQUITECTURA,
  CategoryEnum.ARTISTA,
  CategoryEnum.AVENTURA,
  CategoryEnum.AVES,
  CategoryEnum.CIENCIA,
  CategoryEnum.CINE,
  CategoryEnum.DEPORTE,
  CategoryEnum.ECONOMIA,
  CategoryEnum.EMPRESARIO,
  CategoryEnum.ENTRETENIMIENTO,
  CategoryEnum.FILOSOFIA,
  CategoryEnum.FUTBOL,
  CategoryEnum.GASTRONOMIA,
  CategoryEnum.HISTORIA,
  CategoryEnum.MODA,
  CategoryEnum.MUSICA,
  CategoryEnum.OTROS,
  CategoryEnum.PERIODISMO,
  CategoryEnum.POLITICA,
  CategoryEnum.PRONOGRAFIA,
  CategoryEnum.TWITTER,
  CategoryEnum.VIDEOJUEGOS,
  CategoryEnum.YOUTUBER
]

export enum orderOptionsEnum {
  AZ = "de la A a la Z",
  ZA = "de la Z a la A",
  NEWEST = "por más reciente",
  OLDEST = "por más antiguo"
}

export const orderOptions = [
  {
    value: orderOptionsEnum.AZ,
    label: "A - Z"
  },
  {
    value: orderOptionsEnum.ZA,
    label: "Z - A"
  },
  {
    value: orderOptionsEnum.NEWEST,
    label: "Más reciente"
  },
  {
    value: orderOptionsEnum.OLDEST,
    label: "Más antiguo"
  },
]