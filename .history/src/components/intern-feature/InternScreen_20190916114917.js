import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Data} from './InternData';
import {HomeItem} from './InternItems';

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
