import React from 'react';
import { Text, View } from 'react-native';

import Header from '../../components/Header';
import styles from './styles';

function Orders() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Orders</Text>
      </View>
    </>
  );
}

export default Orders;
