const palette = {
    red: '#FF2E2E',
    green: '#41CC44',
    blue: '#38A9FF',
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
    primary: palette.blue,
    states: {
        error: palette.red,
        warning: palette.yellow,
        success: palette.green,
        info: palette.blue,
    },
};
