import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {

    return (
        <View style={styles.container}>
          <Text style={{fontSize:30, textAlign:'right', padding:10, backgroundColor:'orange'}}>0</Text>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Header;
