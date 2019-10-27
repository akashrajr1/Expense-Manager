import React, { Component } from 'react';
import {Icon} from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Text, Right } from 'native-base';
import ExpenseCardItem from '../components/ExpenseCards';


export default class CardListExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <ExpenseCardItem service="paytm"/>
            <ExpenseCardItem service="gpay"/>
            <ExpenseCardItem service="bhim"/>
            <ExpenseCardItem service="uber"/>
            <ExpenseCardItem service="swiggy"/>
            <ExpenseCardItem service="zomato"/>
            <ExpenseCardItem service="bounce"/>
          </Card>
        </Content>
      </Container>
    );
  }
}