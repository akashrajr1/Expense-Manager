import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Right } from 'native-base';
import { Image, View, TouchableOpacity } from 'react-native';

export default class PaytmCard extends Component {
    constructor(props){
        super(props);
        this.data = this.props.data;
        this.image = this.data['image_url'];
        this.currency_code = this.data['currency_code'];
        this.txn_amount = this.data['txn_amount'];
        this.txn_date = this.data['txn_date'];
        this.txn_to = this.data['txn_to']
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
                    source = {{ uri: this.image }}
                    style = {styles.imageStyle}
                />
                <Text style={{ margin: 20, fontSize: 20}}>{this.txn_to}</Text>
                <Text style={{ margin: 20, fontSize: 15}}>{this.txn_amount} {this.currency_code}</Text>
                <Text style={{ margin: 20, fontSize: 10}}>{this.txn_date}</Text>
            </CardItem>
        );
      }
}