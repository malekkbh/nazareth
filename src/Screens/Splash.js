import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenNames from '../../routes/ScreenNames';

const Splash = props => {
  const navigatoToHome = () => {
    setTimeout(() => {
      props.navigation.replace(ScreenNames.home);
    }, 2500);
  };

  useEffect(() => {
    navigatoToHome();
  }, []);

  return (
    <View>
      <Text>Nazareth App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
