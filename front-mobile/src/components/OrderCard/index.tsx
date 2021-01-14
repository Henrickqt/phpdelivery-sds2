import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

function OrderCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderName}>
          Pedido 1
        </Text>
        <Text style={styles.orderPrice}>
          R$ 53,45
        </Text>
      </View>
      <Text style={styles.text}>
        Há 30min
      </Text>
      <View style={styles.productsList}>
        <Text style={styles.text}>
          Pizza Calabreza
        </Text>
        <Text style={styles.text}>
          Pizza Quatro Queijos
        </Text>
        <Text style={styles.text}>
          Pizza Marguerita
        </Text>
      </View>
    </View>
  );
}

export default OrderCard;
