import React from 'react';
import {image, StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {

  const Products = [
    {
      name: 'Samsung Mobile',
      color: 'white',
      price: 30000,
      Image: require('../FirstSS/source/images/mblink.spng'),
    },
    {
      name: 'Apple Mobile',
      color: 'grey',
      price: 60000,
      image: require('../FirstSS/source/images/Apple.png'),
    },
    {
      name: 'Google Mobile',
      color: 'black',
      price: 80000,
      image: require('../FirstSS/source/images/mblink.png'),

    }
  ]
  return (
    <View >
      <Header />
      <ScrollView>
        {
          Products.map((item) =><Product item={item} />)
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
