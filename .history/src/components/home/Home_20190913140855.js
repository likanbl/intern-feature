import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {HomeItem} from './HomeItem';

const Data = [
  {
    Name: 'Milan Milanovic',
    role: 'Software Engineer',
    skills: 'JavaScript, React Native',
    additionalInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    Name: 'Marko Markovic',
    role: 'Software Engineer',
    skills: 'Python',
    additionalInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
export default class Home extends Component {
  renderItem = ({item}) => <HomeItem item={item} />;

  render() {
    return (
      <Card>
        <View style={StyleSheet.container}>
          <FlatList
            data={Data}
            renderItem={this.renderItem}
            keyExtractor={Data.id}
          />
        </View>
      </Card>
    );
  }
}
