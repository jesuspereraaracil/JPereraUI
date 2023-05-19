const palette = {
  blues: {
    light: '#85caff',
    normal: '#38A9FF',
    dark: '#0085eb',
  },
  reds: {
    light: '#ff6161',
    normal: '#ff2e2e',
    dark: '#fa0000',
  },
  green: '#41CC44',
  yellow: '#DEE03D',
  violet: '#DB42D9',
  cyan: '#41D6D9',
  white: '#F0F0F0',
  lightGrey: '#B0B0B0',
  grey: '#808080',
  darkGrey: '#505050',
  black: '#202020',
};
export const colors = {
  background: palette.white,
  backgroundDisabled: palette.lightGrey,
  border: palette.grey,
  borderDisabled: palette.lightGrey,
  font: palette.black,
  fontDisabled: palette.grey,
  fontInverse: palette.white,
  states: {
    error: palette.reds.normal,
    warning: palette.yellow,
    success: palette.green,
    info: palette.blues.normal,
  },
  primary: {
    normal: palette.blues.normal,
    hover: palette.blues.dark,
    active: palette.blues.light,
  },
};
