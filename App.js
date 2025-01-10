import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {

  const Products = [
    {
      name: 'Samsung Mobile',
      color: 'white',
      price: 30000,
      Image: '../assets/samsung.png',
    },
    {
      name: 'Apple Mobile',
      color: 'grey',
      price: 60000,
      Image: '../assets/Apple.png',
    },
    {
      name: 'Google Mobile',
      color: 'black',
      price: 80000,
      Image: '../assets/Google.png',

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
      {/* <Product /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
