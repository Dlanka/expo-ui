import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ThemeContext from './ThemeContext';

import defualtTheme from '../theme';
import { mergeTheme } from '../utility/helper';

const mytheme = {
    COLORS: { primary: '#000' }
}

export default class ExpoThemeProvider extends Component {

    state = {
        theme: {}
    }

    componentDidMount() {
        const merge = mergeTheme(defualtTheme, mytheme);
        this.setState({ theme: merge });
    }

    render() {
        return (

            <ThemeContext.Provider value={this.state.theme}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
