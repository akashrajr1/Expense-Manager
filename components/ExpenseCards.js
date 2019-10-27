import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Right } from 'native-base';
import { Image, View, TouchableOpacity } from 'react-native';
import { hidden } from 'ansi-colors';
import { string } from 'prop-types';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class ExpenseCardItem extends Component {

  constructor(props) {
      super(props);
      this.service = this.props.service;
      this.title = this.service.charAt(0).toUpperCase() + this.service.slice(1);
      service_map = {
          'paytm': {
              'image': require('../assets/images/paytm.png'),
              'bg_color': '#E1F5FE',
              'icon_color': '#4FC3F7',
              'next_screen': () => Actions.paytm()
          },
          'gpay': {
              'image': require('../assets/images/gpay.png'),
              'bg_color': '#F5F5F5',
              'icon_color': '#2196F3'
          },
          'bhim': {
              'image': require('../assets/images/bhim.png'),
              'bg_color': '#F5F5F5',
              'icon_color': '#4CAF50'
          },
          'uber': {
            'image': require('../assets/images/uber.png'),
            'bg_color': '#FFFFFF',
            'icon_color': '#424242'
          },
          'swiggy': {
            'image': require('../assets/images/swiggy.jpg'),
            'bg_color': '#FFCC80',
            'icon_color': '#FF9800'
          },
          'zomato': {
            'image': require('../assets/images/zomato.png'),
            'bg_color': '#e57373',
            'icon_color': '#f44336'
          },
          'bounce': {
            'image': require('../assets/images/bounce.webp'),
            'bg_color': '#FCE4EC',
            'icon_color': '#E91E63'
          }
      }
      data = service_map[this.service]
      this.image = data['image'];
      this.bg_color = data['bg_color']
      this.icon_color = data['icon_color']
      this.next_screen = data['next_screen']
  }

  render() {
    const styles = {
        imageStyle : {
            width: 80, 
            height: 80,
            borderRadius: 8,
            marginRight: 5,
            backgroundColor: this.bg_color,
        }
    }

    return (
        <CardItem header bordered style = {{ backgroundColor: '#FAFAFA' }}>
            <Image 
                source = {this.image}
                style = {styles.imageStyle}
            />
            <Text style={{ margin: 20, fontSize: 20}}>{this.title}</Text>
            <Right>
                <TouchableOpacity>
                    <Icon name="arrow-forward" reverse color={this.icon_color} onPress={this.next_screen}/>
                </TouchableOpacity>
            </Right>
        </CardItem>
    );
  }
}

