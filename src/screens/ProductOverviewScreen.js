import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProductOverviewScreen = () => {
    return (
        <View styles={styles.screen}>
            <Text>Product Screen</Text>
        </View>
    )
}

export default ProductOverviewScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

