import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CarItem from './src/components/CarItem';
import {Cars} from './src/res/Data';

// life cycle
/**
 * 1- component will amount
 *    ** componentWillUpdate
 * 2- render ( loading the component )
 *    ** componentDidUpdate
 * 3- componentDidLoad
 * 4- compomemtWillUnMount
 */

const App = () => {
  const renderCars = () => {
    const carsComponent = Cars.map(car => {
      return (
        <CarItem brand={car.brand} year={car.year} km={car.km} img={car.img} />
      );
    });

    return carsComponent;
  };

  return (
    <View>
      <ScrollView>
        {renderCars()}
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
