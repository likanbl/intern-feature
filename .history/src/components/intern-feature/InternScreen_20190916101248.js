import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

import {HomeItem} from './InternItems';

const Data = [
  {
    Name: 'Milan Milanovic',
    role: 'Software Engineer',
    skills: 'JavaScript, React Native',
    additionalInfo: 'Milan Milanovic description',
  },
  {
    Name: 'Marko Markovic',
    role: 'Software Engineer',
    skills: 'Python',
    additionalInfo: 'Marko Markovic description',
  },
];
export default class Home extends Component {
  renderItem = ({item}) => <HomeItem item={item} />;

  render() {
    return (
      <View>
        <FlatList
          data={Data}
          renderItem={this.renderItem}
          keyExtractor={Data.id}
        />
      </View>
    );
  }
}
