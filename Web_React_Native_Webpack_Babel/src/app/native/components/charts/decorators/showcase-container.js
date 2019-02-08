import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const ShowcaseContainer = ({ children }) => (
    <View style={ {
        margin: 16,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        shadowOffset: {
            height: 2,
            width: 2,
        },
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.5,
    } }>
        { children }
    </View>
);

ShowcaseContainer.propTypes = {
    children : PropTypes.any
}

export default ShowcaseContainer;
