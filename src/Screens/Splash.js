import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenNames from '../../routes/ScreenNames';

const Splash = props => {
  const navigatoToHome = () => {
    props.navigation.navigate(ScreenNames.home);
  };

  return (
    <View>
      <Button title="Home" onPress={navigatoToHome} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
