import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import {HomeItem} from './HomeItem';
import {internData} from './InternData';

const data = [
  {title: 'Milan', description: 'Description'},
  {title: 'Milutin', description: 'Description '},
];
export default class Home extends Component {
  renderItem = ({item}) => <HomeItem item={item} />;

  render() {
    return (
      <Card>
        <View style={styles.container}>
          <FlatList
            data={internData}
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
