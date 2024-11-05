import { categoryOptionsEnum, roleOptionsEnum } from "./select-options"

export type Guest = {
  name: string
  roles: roleOptionsEnum[]
  categories: categoryOptionsEnum[]
  appearances: { date: string, href: string }[]
  description: string
  image: string
}

export const GUESTS: Guest[] = [
  {
    name: 'Luquitas Rodriguez',
    roles: [roleOptionsEnum.INVITADO, roleOptionsEnum.JURADO, roleOptionsEnum.AMIGO],
    categories: [categoryOptionsEnum.OTRO],
    appearances: [
      {
        date: '2024-03-16',
        href: 'https://www.youtube.com/watch?v=jsVJ1tGJaxY'
      },
      {
        date: '2024-05-29',
        href: 'https://www.youtube.com/watch?v=yLLV0W7IcyU'
      },
      {
        date: '2024-08-05',
        href: 'https://www.youtube.com/watch?v=g5ed_MvrsIo'
      },
    ],
    description: "Humorista",
    image: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/AUACGYBGKNHBZKAEDDOWICBI34.JPG"
  },
  {
    name: 'Emiliano Coroniti',
    roles: [roleOptionsEnum.JURADO],
    categories: [categoryOptionsEnum.CULTURA],
    appearances: [
      {
        date: '2024-11-01',
        href: 'https://www.youtube.com/watch?v=q8GsYTtxGbg'
      },
    ],
    description: "Humorista",
    image: "https://pxbcdn.elchubut.com.ar/chubut/102023/1696636082390.jpg"
  },
]