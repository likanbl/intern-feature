import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {HomeItem} from './HomeItem';

const data = [
  {title: 'Milan', description: 'Description'},
  {title: 'Milutin', description: 'Description '},
];
export default class Home extends Component {
  renderItem = ({item}) => <HomeItem item={item} />;

  render() {
    return (
      <Card>
        <View style={StyleSheet.container}>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(index, _) => index + ''}
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
