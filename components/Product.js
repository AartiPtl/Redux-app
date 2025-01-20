import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/action';

const Product = (props) => {
    const item = props.item
    const dispatch = useDispatch();
    console.log(item, item.image);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
        //console.warn("called",item);
    }

    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth:2, margin: 5, padding: 10 }}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Image style={{ width: 150, height: 150 }} source={{uri:item.image }} />
            <Button title='Add To Cart' onPress={() => handleAddToCart(item)} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Product;
