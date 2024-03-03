import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarItem from '../components/CarItem';
import {Cars} from '../res/Data';

const Home = () => {
  const renderCars = () => {
    const carsComponent = Cars.map(car => {
      return (
        <CarItem
          brand={car.brand}
          year={car.year}
          km={car.km}
          img={car.img}
          id={car.id}
        />
      );
    });

    return carsComponent;
  };

  return (
    <View style={styles.container}>
      <ScrollView>{renderCars()}</ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
