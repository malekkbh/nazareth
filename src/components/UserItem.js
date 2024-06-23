import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserItem = props => {
  const {name, phone, points} = props;
  return (
    <View>
      <Text>{'name: ' + name}</Text>
      <Text>{'phone: ' + phone}</Text>
      <Text>{'points: ' + points}</Text>
    </View>
  );
};

export default UserItem;

const styles = StyleSheet.create({});
