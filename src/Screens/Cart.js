import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import NazarethContext from '../../store/nazarethContext';
import CarItem from '../components/CarItem';

const Cart = () => {
  const {cart, setCart} = useContext(NazarethContext);

  const removeItem = id => {
    var cartArr = cart;
    cartArr = cartArr.filter(car => car?.id != id);
    setCart([...cartArr]);
  };

  const renderCart = () => {
    return cart.map(carItem => (
      <CarItem
        {...carItem}
        hideImage={false}
        onPress={() => removeItem(carItem.id)}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView>{renderCart()}</ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
