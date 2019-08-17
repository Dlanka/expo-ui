import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { mergeTheme, getSpace } from '../utility';

import defaultTheme from '../theme';

export default class Typhograpy extends Component {
    render() {

        const {
            primary,
            secondary,
            tertairy,
            info,
            warning,
            success,
            error,
            color,
            h1,
            h2,
            h3,
            title,
            subtitle,
            caption,
            small,
            bold,
            semibold,
            reguler,
            light,
            center,
            left,
            right,
            theme,
            props,
            children
        } = this.props;

        const { COLORS, FONTS, SIZES } = mergeTheme(defaultTheme, theme);

        const textStyles = StyleSheet.flatten([
            primary && { color: COLORS.primary },
            secondary && { color: COLORS.secondary },
            tertairy && { color: COLORS.tertairy },
            info && { color: COLORS.info },
            warning && { color: COLORS.warning },
            success && { color: COLORS.success },
            error && { color: COLORS.error },
            color && { color: color },

            h1 && FONTS.h1,
            h2 && FONTS.h2,
            h3 && FONTS.h3,
            title && FONTS.title,
            subtitle && FONTS.subtitle,
            caption && FONTS.caption,
            small && FONTS.small,

            bold && { fontWeight: SIZES.bold },
            semibold && { fontWeight: SIZES.semibold },
            reguler && { fontWeight: SIZES.reguler },
            light && { fontWeight: SIZES.light },

            center && { textAlign: 'center' },
            left && { textAlign: 'left' },
            right && { textAlign: 'right' },

            marging && { ...getSpace('margin', marging) },
            padding && { ...getSpace('padding', padding) },
        ])

        return (
            <Text
                style={textStyles}
                {...props}
            >
                {children}
            </Text>
        )
    }
}




export const styles = StyleSheet.create({

})