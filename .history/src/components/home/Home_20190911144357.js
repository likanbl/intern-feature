import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {CardSection} from './CardSection';
import {HomeItem} from './HomeItem';

const data = [
  {title: 'React Native', description: 'JS Framework'},
  {title: 'NodeJS', description: 'JS Env '},
];
export default class Home extends Component {
  renderItem = ({item}) => <HomeItem item={item} />;

  render() {
    return (
      <CardSection>
        <View style={StyleSheet.container}>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(index, _) => index + ''}
          />
        </View>
      </CardSection>
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
