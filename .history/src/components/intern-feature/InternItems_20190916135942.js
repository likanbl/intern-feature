import React, {Component, useState} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import {images} from '../../assets/images';
import {Avatar, Icon} from 'react-native-elements';
import styles from './styles';

const propTypes = {
  item: PropTypes.object,
};

export function InternItems(props) {
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

InternItems.propTypes = propTypes;

export {InternItems};
