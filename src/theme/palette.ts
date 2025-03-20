import { generateColorShades } from './palette.utils';

const generatePalette = (mainColor: string) => {
    return {
        primary: {
            main: mainColor,
            ...generateColorShades(mainColor),
        },

        secondary: {
            main: '#393D3F',

            1: '#EBECEC',
            2: '#C4C5C5',
            3: '#B0B1B2',
            4: '#888B8C',
            5: '#616465',
            6: '#393D3F',
            7: '#2E3132',
            8: '#222526',
            9: '#171819',
            10: '#0B0C0D',
        },

        gray: {
            main: '#d9d9d9',

            1: '#ffffff',
            2: '#fafafa',
            3: '#f5f5f5',
            4: '#f0f0f0',
            5: '#d9d9d9',
            6: '#bfbfbf',
            7: '#8c8c8c',
            8: '#595959',
            9: '#434343',
            10: '#262626',
            11: '#1f1f1f',
            12: '#141414',
            13: '#000000',
        },

        text: {
            highlight: '#00C0AE',
            primary: 'rgba(0, 0, 0, 0.65)',
            secondary: 'rgba(0, 0, 0, 0.45)',
            disabled: 'rgba(0, 0, 0, 0.25)',
        },

        white: '#FFFFFF',
        black: '#000000',
        warning: {
            main: '#FFB800',
        },
        success: {
            main: '#00C0AE',
        },
        error: {
            light: '#FEE9F0',
            main: '#C61F56',
        },
    };
};

export default generatePalette;
