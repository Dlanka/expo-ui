import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#FEA035',
    secondary: '#4C3372',
    tertiary: '#FF537C',

    black: '#000',
    white: '#fff',

    grey: '#ddd',
    info: '#988AF8',
    warning: '#FFE250',
    success: '#2AF83F',
    error: '#F9585D'
}

export const SIZES = {

    base: 8,
    font: 16,

    h1: 34,
    h2: 24,
    h3: 20,
    title: 18,
    subtitle: 14,
    caption: 12,
    small: 10,

    radius: 4,

    bold: "700",
    semibold: "500",
    reguler: "400",
    light: "300",

    width,
    height
}

export const FONTS = {
    h1: {
        fontSize: SIZES.h1,
        letterSpacing: 1.2,
    },
    h2: {
        fontSize: SIZES.h2,
        letterSpacing: 1,
    },
    h3: {
        fontSize: SIZES.h3,
        letterSpacing: 1.2,
    },
    title: {
        fontSize: SIZES.title,
        letterSpacing: 1.2,
    },
    subtitle: {
        fontSize: SIZES.subtitle,
        letterSpacing: 1.2,
    },
    caption: {
        fontSize: SIZES.caption,
        letterSpacing: 1.2,
    },
    small: {
        fontSize: SIZES.small,
        letterSpacing: 1.2,
    },
}

export default {
    COLORS,
    SIZES,
    FONTS,
}