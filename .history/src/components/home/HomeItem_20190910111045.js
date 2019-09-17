import React, { Comonent } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet} from'react-native';
import PropTypes from 'prop-types';

const propTypes ={
    item: PropTypes.object
};

class HomeItem extends Component {
    state= {
        isSelected: false
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableWithoutFeedback>
                    <View style={styles.titleContainer}>
                        <Text>Hey</Text>
                        <Image source={} style={styles.image}/> 
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}