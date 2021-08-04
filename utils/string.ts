export const generateName = (name: string): string =>
  '@'.concat(name.toLowerCase()).split(' ').join('')
