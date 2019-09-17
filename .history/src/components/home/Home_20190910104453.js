import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

const data = [
  {title: 'React Native', description: 'JS Framework'},
  {title: 'NodeJS', description: 'JS Env '},
];
export default class Home extends Component {
  renderItem = () => <Text>Hello</Text>;

  render() {
    return (
      <View style={StyleSheet.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(index, _) => index + ''}
        />
      </View>
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
