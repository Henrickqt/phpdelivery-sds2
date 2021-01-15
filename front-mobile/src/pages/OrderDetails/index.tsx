import React from 'react';
import { Alert, Linking, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';

import { confirmDelivery } from '../../api';
import Order from '../../types/orderType';
import styles from './styles';

type Props = {
  route: {
    params: {
      order: Order;
    }
  }
}

function OrderDetails({ route }: Props) {
  const navigation = useNavigation();
  const order = route.params.order;

  const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving
      &dir_action=navigate&destination=${order.latitude},${order.longitude}`);
  }

  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
      .then(() => {
        Alert.alert(`Pedido ${order.id} confirmado com sucesso!`);
        navigation.navigate('Orders');
      })
      .catch(() => {
        Alert.alert(`Erro ao confirmar o pedido ${order.id}.`);
      });
  }

  const handleOnCancel = () => {
    navigation.navigate('Orders');
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button}>
          <Text style={styles.buttonText} onPress={handleStartNavigation}>
            INICIAR NAVEGAÇÃO
          </Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleConfirmDelivery}>
          <Text style={styles.buttonText}>
            CONFIRMAR ENTREGA
          </Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleOnCancel}>
          <Text style={styles.buttonText}>
            CANCELAR
          </Text>
        </RectButton>
      </View>
    </>
  );
}

export default OrderDetails;
