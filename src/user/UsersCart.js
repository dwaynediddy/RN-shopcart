import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UsersCart = () => {
    return (
        <View style={styles.screen}>
            <Text>Your Cart Items</Text>
        </View>
    )
}

export default UsersCart

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
