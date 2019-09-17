import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import {images} from '../../assets/images';

const propTypes = {
  item: PropTypes.object,
};

class HomeItem extends Component {
  state = {
    isSelected: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.titleContainer}>
            <Text>Hey</Text>
            <Image source={images.down} style={styles.image} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
HomeItem.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  image: {
    width: 400,
    height: 400,
  },
});

export {HomeItem};
