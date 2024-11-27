import type { Staff } from "../types/staff";

export const STAFF: Staff[] = [
  {
    name: "Tomás Rebord",
    role: "Conductor",
    description: `
      Tomás Rebord nació en el barrio de Almagro en 1993. Se recibió de abogado en la Universidad de Buenos Aires. 
      Creó y protagonizó los exitosos ciclos videorradiales Caricias significativas, MAGA y El método Rebord. 
      Actualmente, conduce el ciclo Hay algo ahí, por Blender.
    `,
    image: "/staff/rebord.webp",
    instagram: "https://www.instagram.com/tomasrebord/",
    twitter: "https://twitter.com/tomasrebord/",
  },
  {
    name: "Juan Ruffo",
    role: "Coconductor",
    description: `
      Tu amigable puerta costado, Juan Enrique Ruffo, nació en 1994. 
      Fue productor del programa Caricias Significativas y actualemnete conduce Hay Algo Ahí junto a Tomás Rebord.
      Ruffo es un profundo amante de las bandurrias y de Racing Club (flamante campeón de la Suda).
    `,
    image: "/staff/ruffo.webp",
    instagram: "https://www.instagram.com/jeruffo/",
    twitter: "https://twitter.com/jeruffo/",
  },
  {
    name: "Iván Schargrodsky",
    role: "Columnista",
    description: `
      Iván "El Africano" Schargrodsky, nació en 1989 en Bahía Blanca y es considerado el mejor periodista de su generación.
      Es el conductor de la columna favorita de las golondrinas, "La Hora Africana", donde realiza un analísis de la actualidad politica.
    `,
    image: "/staff/ivan.webp",
    instagram: "https://www.instagram.com/ischargro/",
    twitter: "https://twitter.com/ischargro/",
  },
  {
    name: "Jorge Pinarello",
    role: "Columnista",
    description: `
      Jorge "El Loco" Pinarello nació en 1986 en la tierra de las diagonales y las pollajerias. 
      Es el creador de "Te Lo Resumo Así Nomás", uno de los canales de Youtube más populares de Argentina.
      Podés encontrar a Jorge en los "Miércoles de Puchos" de Hay Algo Ahí.
    `,
    image: "/staff/jorge.webp",
    instagram: "https://www.instagram.com/teloresumo/",
    twitter: "https://twitter.com/teloresumo/",
  },
  {
    name: "Fio Sargenti",
    role: "Columnista",
    description: `
      Fiorella Sargenti es una periodista y conductora de radio nacida en 1984 en Tierra del Fuego.
      Fio es una especialista en cultura pop y es la líder de la comisión desnormificadora de Hay Algo Ahí.
    `,
    image: "/staff/fio.webp",
    instagram: "https://www.instagram.com/fiosargenti/",
    twitter: "https://twitter.com/FioSargenti/",
  },
  {
    name: "Emilio González Moreira",
    role: "Columnista",
    description: `
      Emilio González Moreira nació en 1979 en Buenos Aires.
      Además de ser un gran comediante, Emilio también es un experto en videojuegos, 
      y lo demuestra tanto en su canal de Youtube "Tiempo de Videojuegos" como en su columna de Hay Algo Ahí.
    `,
    image: "/staff/emilio.webp",
    instagram: "https://www.instagram.com/emiliostandup/",
    twitter: "https://twitter.com/elgranpushy/",
  },
  {
    name: "Marcela Feudale",
    role: "Columnista",
    description: `
      Marcela "La Enana" Feudale nació en 1962 en Buenos Aires.
      Trabajo como periodista, profesora de historia y fue locutora en Videomatch, el icónico programa de Marcelo Tinelli.
      En Hay Algo Ahí, la enana es una de las responsables de brindarnos todos los meses un "Storybord".
    `,
    image: "/staff/enana.webp",
    instagram: "https://www.instagram.com/marcelafeudale/",
    twitter: "https://twitter.com/SoyFeudaleM/",
  },
  {
    name: "Felipe Pigna",
    role: "Columnista",
    description: `
      Felipe Pigna, el filip para los amigos, es un historiador nacido en 1959 en Buenos Aires.

      Junto a Tomás Rebord llenaron teatros con el espectáculo "Hacen Historia" y hoy siguen contando la historia juntos en los "Storybords" de Hay Algo Ahí.
    `,
    image: "/staff/filip.webp",
    instagram: "https://www.instagram.com/felipe.pigna/",
    twitter: "https://twitter.com/FelipePigna/",
  },
];

export const PRODUCTION: {name: string, image: string, role: string}[] = [
  {
    name: 'Iván Scarpati',
    image: "/staff/tano.webp",
    role: "Puesta de Streaming"
  },
  {
    name: "Joa Wav",
    image: "/staff/joa.webp",
    role: "Sonido"
  },
  {
    name: "Nahuel Prado",
    image: "/staff/nahuel.webp",
    role: "Producción Ejecutiva"
  },
  {
    name: "Ramiro Preckel",
    image: "/staff/rama.webp",
    role: "Producción"
  },
  {
    name: "Manu Brignole Feuer",
    image: "/staff/manu.webp",
    role: "Producción Digital"
  },
  {
    name: "Julián Ariel Duna",
    image: "/staff/ardilla.webp",
    role: "Producción Digital"
  },
  {
    name: 'Celina "Negra" Lattanzio',
    image: "/staff/incognito.webp",
    role: "Producción Creativa"
  },
  {
    name: "Branko Franco",
    image: "/staff/branko.webp",
    role: "Cámara"
  },
  {
    name: "Ignacio Suárez",
    image: "/staff/nacho.webp",
    role: "Jefe de Estudio"
  },
]