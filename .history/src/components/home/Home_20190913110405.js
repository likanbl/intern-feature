import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {HomeItem} from './HomeItem';
import {internData} from './InternData';

const Data = [
  {
    Name: 'Milan Milanovic',
    role: 'Software Engineer',
    more: {
      linkedIn: 'https://www.linkedin.com/feed/',
      skills: 'JavaScript, React Native',
      additionalInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
  {
    Name: 'Marko Markovic',
    role: 'Software Engineer',
    more: {
      linkedIn: 'https://www.linkedin.com/feed/',
      skills: 'Python, Machine Learning',
      additionalInfo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  },
];

export default class Home extends Component {
  render() {
    return (
      <Card>
        <View style={styles.container}>
          <FlatList
            data={Data}
            renderItem={({item}) => <Item title={item.Name} />}
            keyExtractor={item => item.Name}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
});
