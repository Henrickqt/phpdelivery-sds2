import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { fetchOrders } from '../../api';

import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';

import Order from '../../types/orderType';
import styles from './styles';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setIsLoading(true);

      fetchOrders()
        .then(response => setOrders(response.data))
        .catch(() => Alert.alert('Erro ao carregar os pedidos.'))
        .finally(() => setIsLoading(false));
    }
  }, [isFocused]);

  const handleNavigateToOrderDetails = (order: Order) => {
    navigation.navigate('OrderDetails', { order });
  }

  return (
    <>
      <Header />
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={{ 
          alignItems: 'center', 
          paddingVertical: 8, 
        }}
      >
        {isLoading
          ? <Text style={styles.loadingText}>
              Carregando os pedidos...
            </Text>
          : orders.map(order => 
              <TouchableWithoutFeedback 
                key={order.id} 
                onPress={() => handleNavigateToOrderDetails(order)}
              >
                <OrderCard order={order} />
              </TouchableWithoutFeedback>
            )
        }
      </ScrollView>
    </>
  );
}

export default Orders;
