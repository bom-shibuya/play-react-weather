const font = {
  color: {
    base: '#000'
  },
  family: {
    base: "Roboto, 'Noto Sans JP', sans-serif"
  },
  size: {
    head: '4rem',
    normal: '1.4rem',
    subhead: '2.4rem'
  },
  weight: {
    black: '900',
    bold: '700',
    normal: '400'
  }
}

const bg = {
  base: 'white'
}

export const theme = {
  bg,
  font
}

export type Theme = typeof theme
