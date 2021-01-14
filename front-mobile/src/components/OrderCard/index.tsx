import React from 'react';
import { Text, View } from 'react-native';

import Order from '../../types/orderType';
import dateFromNow from '../../utils/dateFromNow';
import formatPrice from '../../utils/formatPrice';
import styles from './styles';

type Props = {
  order: Order;
}

function OrderCard({ order }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderName}>
          {`Pedido ${order.id}`}
        </Text>
        <Text style={styles.orderPrice}>
          {formatPrice(order.total)}
        </Text>
      </View>
      <Text style={styles.text}>
        {dateFromNow(order.moment)}
      </Text>
      <View style={styles.productsList}>
        {order.products.map(product => 
          <Text key={product.id} style={styles.text}>
            {product.name}
          </Text>  
        )}
      </View>
    </View>
  );
}

export default OrderCard;
