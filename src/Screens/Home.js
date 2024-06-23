import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CarItem from '../components/CarItem';
import {Cars} from '../res/Data';
import {getAllUsers} from '../res/api';
import UserItem from '../components/UserItem';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

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

  const renderUsers = () => {
    return users.map(user => <UserItem {...user} />);
  };

  const getAllUsersFromAPI = () => {
    setLoading(true);
    getAllUsers().then(res => {
      setLoading(false);
      setUsers(res);
    });
  };

  useEffect(() => {
    getAllUsersFromAPI();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>{renderUsers()}</ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
