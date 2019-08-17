
const getSpaceValues = (type, value) => {

    let val = { top: null, right: null, bottom: null, left: null };

    if (typeof value === 'object') {
        val = { top: value[0], right: value[1], bottom: value[2], left: value[3] }
    } else {
        val = { top: value, right: value, bottom: value, left: value }
    }

    return {
        [`${type}Top`]: val.top,
        [`${type}Right`]: val.right,
        [`${type}Bottom`]: val.bottom,
        [`${type}Left`]: val.left,
    }
}

export const getSpace = (type, value) => {

    if (typeof value === 'number') {
        return getSpaceValues(type, value);
    }

    if (typeof value === 'object') {

        const objecSize = Object.keys(value).length;

        switch (objecSize) {

            case 1: return getSpaceValues(type, [value[0], value[0], value[0], value[0]]);
            case 2: return getSpaceValues(type, [value[0], value[1], value[0], value[1]]);
            case 3: return getSpaceValues(type, [value[0], value[1], value[2], value[1]]);
            default: return getSpaceValues(type, [value[0], value[1], value[2], value[3]]);

        }

    }

}

export const mergeTheme = (defualtTheme = {}, theme = {}) => {
    return {
        COLORS: { ...defualtTheme.COLORS, ...theme.COLORS },
        SIZES: { ...defualtTheme.SIZES, ...theme.SIZES },
        FONTS: { ...defualtTheme.FONTS, ...theme.FONTS },
        ...theme.REST
    }
}