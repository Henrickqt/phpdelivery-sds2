import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')} />
      <Text style={styles.text}>PHP-Delivery</Text>
    </View>
  );
}

export default Header;
