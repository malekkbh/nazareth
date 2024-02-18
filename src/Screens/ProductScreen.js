import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Images from '../assets/images/images';
import CarItem from '../components/CarItem';

const ProductScreen = props => {
  const {data} = props.route.params;
  const {brand, year, km, hideImage , img} = data;

  console.log("data: " , data);

  return (
    <View style={styles.container}>
      <Image style={styles.header} source={img} />
      <Text style={styles.title}>{`${brand} ${year}`}</Text>
      <CarItem {...data} />
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
    marginLeft: 15
  },
});
