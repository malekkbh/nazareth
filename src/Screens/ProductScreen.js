import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import Images from '../assets/images/images';
import CarItem from '../components/CarItem';
import NazarethContext from '../../store/nazarethContext';
import ScreenNames from '../../routes/ScreenNames';

const ProductScreen = props => {
  const {data} = props.route.params;
  const {brand, year, km, hideImage, img, id} = data;
  const {cart, setCart} = useContext(NazarethContext);

  console.log('data: ', cart);

  const checkIfInCart = () => {
    const car = cart.find(carItem => carItem?.id === id);
    return !!car;
  };

  const onBuyPress = () => {
    if (checkIfInCart()) {
      Alert.alert('car is already in cart');
      return;
    }

    //addToCart
    const cartArr = cart;
    cartArr.push(data);
    setCart([...cartArr]);

    // setCart(prev => {
    //   return prev.push(data);
    // });
  };

  const navigateToCart = () => {
    props.navigation.navigate(ScreenNames.cart);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.header} source={img} />
      <Text style={styles.title}>{`${brand} ${year}`}</Text>
      <CarItem {...data} />

      <TouchableOpacity style={styles.btn} onPress={onBuyPress}>
        <Text style={styles.btnTxt}>Buy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={navigateToCart}>
        <Text style={styles.btnTxt}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 15,
  },
  btn: {
    width: '70%',
    backgroundColor: 'green',
    height: 60,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 30,
    color: '#ffff',
  },
});
