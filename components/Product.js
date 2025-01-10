import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Product = (props) => {
    const item = props.item
    console.log('item',item.Image)

    return (
        <View style={{alignItems:'center', borderBottomColor:'orange', borderBottomWidth:'2', margin:5, padding:10}}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Image style={{ width: 200, height: 200 }} source={require( 'item.Image') } />

            <Button title='Add To Cart' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Product;
