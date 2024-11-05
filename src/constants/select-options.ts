export enum roleOptionsEnum {
  INVITADO = "Invitado",	
  METODO = "Método",
  JURADO = "Jurado de viernes",
  AMIGO = "Amigo de la casa",
  ESPECIALES = "Especiales"
}

export const roleOptions = [
  roleOptionsEnum.INVITADO,
  roleOptionsEnum.METODO,
  roleOptionsEnum.JURADO,
  roleOptionsEnum.AMIGO,
  roleOptionsEnum.ESPECIALES
]



export enum categoryOptionsEnum {
  POLITICA = "Política",	
  CIENCIA = "Ciencia",
  DEPORTE = "Deportes",
  TECNOLOGIA = "Tecnología",
  CULTURA = "Cultura",
  OTRO = "Otros"
}

export const categoryOptions = [
  categoryOptionsEnum.POLITICA,
  categoryOptionsEnum.CIENCIA,
  categoryOptionsEnum.DEPORTE,
  categoryOptionsEnum.TECNOLOGIA,
  categoryOptionsEnum.CULTURA,
  categoryOptionsEnum.OTRO  
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