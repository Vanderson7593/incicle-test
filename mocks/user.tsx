import { IUser } from 'types'

export const USERS = [
  {
    about: 'Front-end developer',
    address: 'Ilha de Luanda - Luanda - Angola',
    hasStory: true,
    name: 'Vanderson Telema',
    profilePhoto: '/me.jpg',
    coverPhoto: '/cover.jpeg',
    work: 'InCicle Inc',
    school: 'Uninorte',
  },
  {
    about: '',
    address: '',
    hasStory: true,
    name: 'Patricia Santos',
    profilePhoto: '/delma.jpg',
    coverPhoto: '/cover.jpeg',
    work: 'InCicle',
    school: 'Uninorte',
  },
] as ReadonlyArray<IUser>
