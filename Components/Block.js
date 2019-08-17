import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native';

import defualtTheme from './../theme';
import { getSpace, mergeTheme } from './../utility';

export default class Block extends PureComponent {

    render() {

        const {
            flex,
            row,
            column,
            primary,
            secondary,
            tertiary,
            grey,
            info,
            success,
            error,
            center,
            middle,
            left,
            right,
            top,
            bottom,
            wrap,
            margin,
            padding,
            space,
            radius,
            color,
            theme,
            children,
            props,
        } = this.props;

        const { COLORS, SIZES } = mergeTheme(defualtTheme, theme);

        const blockStyles = StyleSheet.flatten([
            styles.block,
            flex && { flex: flex === true ? 1 : flex },
            flex === false && { flex: 0 },
            row && styles.row,
            column && styles.column,
            center && styles.center,
            middle && styles.middle,
            middle && styles.middle,
            left && styles.left,
            right && styles.right,
            top && styles.top,
            bottom && styles.bottom,
            wrap && styles.wrap,
            space && { justifyContent: `space-${space}` },
            margin && { ...getSpace('margin', margin) },
            padding && { ...getSpace('padding', padding) },
            radius && { borderRadius: SIZES.radius },
            //colors
            primary && { backgroundColor: COLORS.primary },
            secondary && { backgroundColor: COLORS.secondary },
            tertiary && { backgroundColor: COLORS.tertiary },
            grey && { backgroundColor: COLORS.grey },
            info && { backgroundColor: COLORS.info },
            success && { backgroundColor: COLORS.success },
            error && { backgroundColor: COLORS.error },
            color && { backgroundColor: color }
        ])

        return (
            <View style={blockStyles} {...props}>
                {children}
            </View>
        )
    }
}



export const styles = StyleSheet.create({
    block: { flex: 1 },
    row: { flexDirection: 'row' },
    column: { flexDirection: 'column' },
    center: { alignItems: 'center' },
    middle: { justifyContent: 'center' },
    left: { justifyContent: 'flex-start' },
    right: { justifyContent: 'flex-end' },
    top: { justifyContent: 'flex-start' },
    bottom: { justifyContent: 'flex-end' },
    wrap: { flexWrap: 'wrap' }
})
