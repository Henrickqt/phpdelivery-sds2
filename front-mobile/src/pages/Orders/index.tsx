import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../../api';

import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';

import Order from '../../types/orderType';
import styles from './styles';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Erro ao carregar os pedidos.'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading
          ? <Text style={styles.text}>
            Carregando os pedidos...
          </Text>
          : orders.map(order => 
            <TouchableWithoutFeedback key={order.id}>
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          )
        }
      </ScrollView>
    </>
  );
}

export default Orders;
