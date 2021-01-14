import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function Header() {
  const navigation = useNavigation();

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavigateToHome}>
      <View style={styles.container}>
        <Image source={require('../../assets/Logo.png')} />
        <Text style={styles.text}>PHP-Delivery</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Header;
