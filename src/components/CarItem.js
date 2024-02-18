import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ScreenNames from '../../routes/ScreenNames';
import {useNavigation} from '@react-navigation/native';

const CarItem = props => {
  const {brand, year, km, hideImage} = props;
  // const brand = props.brand
  // const year = props.year
  // const km = props.km
  // const hideImage = props.hideImage

  const [like /** state */, setLike /*setState */] = useState(0);

  const navigation = useNavigation();

  // var like = 0;

  const onItemPress = () => {
    // like++;
    setLike(like + 1);

    const car = {
      brand,
      year,
      km,
      hideImage: true,
      img: props.img,
    };

    navigation.navigate(ScreenNames.product, {data: car});
  };

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>{`Brand: ` + props.brand}</Text>
          <Text style={styles.txt}>{`Year: ${year}`}</Text>
          <Text style={styles.txt}>{'KM: ' + km}</Text>
          <Text style={styles.txt}>{'like: ' + like}</Text>
        </View>
        {!hideImage && <Image style={styles.img} source={props.img} />}
      </View>
    </TouchableOpacity>
  );
};

export default CarItem;

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
  },
  container: {
    borderWidth: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plus: {
    fontSize: 45,
    textAlign: 'center',
  },
  plusContainer: {
    borderWidth: 1,
    flex: 1,
  },
  txtContainer: {
    flex: 1,
  },
  img: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
});
