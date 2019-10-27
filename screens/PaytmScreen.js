import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Right, Modal } from 'native-base';
import PaytmCard from '../components/PaytmCard';
import { Image, View, TouchableOpacity } from 'react-native';
import Loader from '../components/Loader';
import ENV from '../Env';

export default class CardListExample extends Component {
  state = {
      paytm_data: [],
      loading: true
  }

  async componentWillMount() {
    paytm_data = []
    count = 1;
    page_number = 0;
    while (count!=0){
        paytm_detail = await this.getPaytmDetails(page_number);
        // console.log(paytm_detail)
        console.log(page_number, count);
        count = paytm_detail['response'].length;
        response = paytm_detail['response'];
        response.map(data => paytm_data.push({
            'currency_code': data['currencyCode'],
            'txn_amount': data['txnamount'],
            'txn_date': data['txndate'],
            'txn_to': data['txnTo'],
            'txn_type': data['txntype'],
            'total_balance': data['totalBalance'],
            'image_url': data['imageUrl']
        }))
        page_number ++;
    }
    this.setState({
        paytm_data: paytm_data,
        loading: false
    });
    // console.log(paytm_detail)
  }

  async getPaytmDetails(page_number = 0) {
    const axios = require('axios');
    const url = `https://paytm.com/v1/api/wallet/txnhistory?page_size=199&page_number=${page_number}`
    const opts = {
        headers: {
            cookie: ENV.Paytm.Cookie
        }
    }
    return await fetch(
        url,
        opts
    ).then(res => res.json())
  }


  renderPaytmDetails() {
    return this.state.paytm_data.map((data, index) => <PaytmCard key={index} data={data}/>);
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
      <Container>
        <Loader loading={this.state.loading}/>        
        <Content>
            <Card>
                {this.renderPaytmDetails()}
            </Card>
        </Content>
      </Container>
    );
  }
}