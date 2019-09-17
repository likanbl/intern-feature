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
import {Avatar, Icon} from 'react-native-elements';
import styles from './styles';

const propTypes = {
  item: PropTypes.object,
};

class InternItems extends Component {
  renderDetails = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.description}>{this.props.item.additionalInfo}</Text>
    </View>
  );

  render() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <View style={styles.cardView}>
        <View style={styles.cardContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              setIsOpen(!isOpen);
            }}>
            <View style={styles.titleContainer}>
              <View>
                <Avatar
                  size="medium"
                  rounded
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                />
              </View>
              <View style={styles.nameRole}>
                <Text style={styles.title}>{this.props.item.Name}</Text>
                <Text style={styles.role}>{this.props.item.role}</Text>
                <Text style={styles.role}>{this.props.item.skills}</Text>
              </View>
              <Icon
                name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              />
            </View>
          </TouchableWithoutFeedback>
          {isOpen && this.renderDetails()}
        </View>
      </View>
    );
  }
}
HomeItem.propTypes = propTypes;

export {HomeItem};
