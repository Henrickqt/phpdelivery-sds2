import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import styles from './styles';

function Home() {
  const navigation = useNavigation();

  const handleNavigateToOrders = () => {
    navigation.navigate('Orders');
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Image source={require('../../assets/Deliveryman.png')} />
        <Text style={styles.title}>
          Acompanhe os pedidos e {'\n'} entregue no prazo!
        </Text>
        <Text style={styles.subTitle}>
          Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão
        </Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigateToOrders}>
          <Text style={styles.buttonText}>
            VER PEDIDOS
          </Text>
        </RectButton>
      </View>
    </>
  );
}

export default Home;
