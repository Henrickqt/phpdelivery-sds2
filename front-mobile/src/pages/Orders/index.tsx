import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import styles from './styles';

function Orders() {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}

export default Orders;
