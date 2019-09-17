import React, {Component} from 'react';
import {Card} from 'react-native-elements';

export default class CardSection extends Component {
  render() {
    return <Card>{props.children}</Card>;
  }
}

export {CardSection};
