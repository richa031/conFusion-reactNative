import React, { Component } from 'react';
import { Text } from 'react-native';

export class Contact extends Component {

    static navigationOptions = {//for the title on the page
        title: 'Contact Us'
    }
  render() {
    return (
      <Text>Contact Component</Text>
    )
  }
}

export default Contact;
