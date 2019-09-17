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
import {Avatar} from 'react-native-elements';

const propTypes = {
  item: PropTypes.object,
};

class HomeItem extends Component {
  state = {
    isSelected: false,
  };

  onPress = () => {
    this.setState((prevState, prevProps) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  renderDetails = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.description}>{this.props.item.description}</Text>
    </View>
  );

  render() {
    const {isSelected} = this.state;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.titleContainer}>
            <Avatar
              size="medium"
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
            />
            <Text style={styles.title}>{this.props.item.title}</Text>
            <Image
              source={isSelected ? images.close : images.expand}
              style={styles.image}
            />
          </View>
        </TouchableWithoutFeedback>
        {isSelected && this.renderDetails()}
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 22,
  },
  description: {
    flex: 1,
    fontSize: 22,
    color: 'gray',
    paddingTop: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export {HomeItem};
